# ConfigLoader

ConfigLoader is a react component built to load a config file as JSON to have one build for multiple environments

## Installation

Just run the command `npm install @eonix/configloader`

And use it with a simple import
```javascript
import ConfigLoader from "@eonix/configloader"
```

## Props
* onConfigLoaded
```typescript
(loadedConfigs: object) => Promise<void> | void
```
a callback function that take the loaded configs as a parameter. If it's return a promise, it will be awaited

* loader `React.Node`  
The component showed when the request is pending
* error 
```typescript
(err: TypeError) => React.Node
```
a callback function if the config loading return an error. Gets the error thrown.
 * url `string`
The url used to load the configs json file

### Using the configs



There is 3 ways of using the loaded configs built in teh components but you can use some other by using the `onLoadedConfigs` callback

* Using the context `ConfigsContext` that contain the loaded configs object
    ```jsx
    import { ConfigsContext } from '@eonix/configloader';

    const App = () => {
        const config = useContext(ConfigsContext);

        return <>{/* ... */}</>
    }
    ```
* using the `config` object exported from the component
* using the `useConfig` hook for functional components
    ```jsx
    import { useConfig } from '@eonix/configloader';
    
    const App = () => {
        const config = useConfig();
    
        return <>{/* ... */}</>    
    }
    ```
  using Typescript
    ```tsx
    import { useConfig } from '@eonix/configloader';
    import { useMemo } from "react";
  
    // define your own config type
    type AppConfig = { publicKey: string };
  
    // create a custom hook that returns your typed config
    export const useAppConfig = () => useConfig<AppConfig>();
  
    const App = () => {
        const config = useAppConfig();
    
        return <>{/* ... */}</>
    }
    ```

## Auteurs
* **[Kevin Goyvaerts](https://github.com/mrdelik) for [Eonix](https://eonix.be)**
