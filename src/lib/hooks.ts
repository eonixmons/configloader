import {useContext} from "react";
import {ConfigsContext} from "./configloader";

export function useConfigs<TConfigs extends object>() {
    const configs = useContext(ConfigsContext);

    return configs as TConfigs;
}