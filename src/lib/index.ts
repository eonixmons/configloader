import ConfigLoader, {ConfigsContext, ConfigLoaderProps} from "./configloader";
import config from "./config";
import {useConfigs} from "./hooks";

export default ConfigLoader;
export type {ConfigLoaderProps}
export { ConfigsContext, config, useConfigs}