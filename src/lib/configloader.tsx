import React, {
    useState,
    useEffect,
    createContext,
    PropsWithChildren,
} from 'react';
import PropTypes from 'prop-types';
import config from './config';

export const ConfigsContext = createContext({});

enum ConfigLoaderStatus {
    LOADING,
    LOADED,
    ERROR,
}

const ConfigLoaderDefaultProps = {
    loader: <div>Loading ...</div>,
    error: (err: TypeError) => <div>{err.message}</div>,
    url: '/configs.json',
};

export type ConfigLoaderProps<TConfigs> = typeof ConfigLoaderDefaultProps & {
    onConfigLoaded?: (loadedConfigs: TConfigs) => Promise<void> | void;
}

function ConfigLoader<TConfigs extends object>({
                                                   children,
                                                   onConfigLoaded,
                                                   loader,
                                                   url,
                                                   error,
                                               }: PropsWithChildren<ConfigLoaderProps<TConfigs>>) {
    const [configs, setConfigs] = useState<TConfigs>({} as TConfigs);
    const [status, setStatus] = useState<ConfigLoaderStatus>(
        ConfigLoaderStatus.LOADING
    );
    const [err, setErr] = useState<TypeError | undefined>();

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch((url as string));
                if (response.ok) {
                    const loadedConfigs = await response.json();
                    Object.keys(loadedConfigs).forEach((key) => {
                        config[key] = loadedConfigs[key];
                    });

                    setConfigs(loadedConfigs);
                    if (onConfigLoaded) {
                        await onConfigLoaded(loadedConfigs);
                    }
                    setStatus(ConfigLoaderStatus.LOADED);
                }
            } catch (errObj) {
                setStatus(ConfigLoaderStatus.ERROR);
                setErr(errObj as TypeError);
            }
        })();
    }, [] as never[]);

    switch (status) {
        case ConfigLoaderStatus.LOADING:
            return <>{loader}</>;
        case ConfigLoaderStatus.ERROR:
            return <>{error(err as TypeError)}</>;
        default:
            return (
                <ConfigsContext.Provider value={configs}>
                    {children}
                </ConfigsContext.Provider>
            );
    }
}

ConfigLoader.propTypes = {
    onConfigLoaded: PropTypes.func,
    loader: PropTypes.element,
    error: PropTypes.func,
    url: PropTypes.string,
}

ConfigLoader.defaultProps = ConfigLoaderDefaultProps;

export default ConfigLoader;
