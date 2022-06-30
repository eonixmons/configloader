declare global {
    interface Window {
        __CONFIG__: any
    }
}

window.__CONFIG__ = {};

export default window.__CONFIG__;