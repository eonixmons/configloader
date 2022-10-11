# ConfigLoader

ConfigLoader is a react component built to load a config file as JSON to have one build for multiple environments

## Installation

Just run the command `npm install @eonix/configloader`

And use it with a simple import
```javascript
import ConfigLoader from "@eonix/configloader"
```

## Using the component
Look at the `main.tsx` file.
It blocks the render of the app while configs are not loaded
````typescript jsx
<ConfigLoader<GenericType>>
    {/* children here */}
</ConfigLoader>
````
If a generic type is used, the loadedConfigs object will of this type. If no type provided, then the loadedConfigs will be of type object.

```typescript jsx
import {useConfigs} from "./hooks";

function Component() {
    const configs = useConfigs<GenericType>();
}
```
If you use the provided hook with a generic type, the returned object will be of the generic type. If no type are provided, then it will be of type object 

## Props
* onConfigLoaded
```typescript
(loadedConfigs: object) => Promise<void> | void
```
a callback function that take the loaded configs as a parameter. If it returns a promise, it will be awaited

* loader `React.Node`  
The component showed when the request is pending
* error 
```typescript
(err: TypeError) => React.Node
```
a callback function if the config loading return an error. Gets the error thrown.
 * url `string`
The url used to load the configs json file

## Using the configs

There is 3 ways of using the loaded configs built in the component but you can use some other by using the `onLoadedConfigs` callback

* Using the context `ConfigsContext` that contain the loaded configs object
* Using the hook `useConfigs` that allow you to pass a generic type
* using the `config` object exported from the component

## Auteurs
* **[Kevin Goyvaerts](https://github.com/mrdelik) for [Eonix](https://eonix.be)**
