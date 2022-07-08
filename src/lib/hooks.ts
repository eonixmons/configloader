import { useContext } from 'react';
import { ConfigsContext } from './configloader';

export const useConfig = <T = unknown>(): T => useContext(ConfigsContext) as T;
