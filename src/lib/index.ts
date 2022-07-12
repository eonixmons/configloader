import ConfigLoader, {
  ConfigsContext,
  ConfigLoaderProps,
} from './configloader';
import config from './config';
import { useConfig } from './hooks';

export default ConfigLoader;
export type { ConfigLoaderProps };
export { ConfigsContext, config, useConfig };