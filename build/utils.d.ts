/// <reference types="iobroker" />
/** The root directory of JS-Controller */
export declare const controllerDir: string;
/** Reads the configuration file of JS-Controller */
export declare function getConfig(): Record<string, any>;
interface AdapterConstructor {
    (adapterName: string): ioBroker.Adapter;
    (adapterOptions: ioBroker.AdapterOptions): ioBroker.Adapter;
}
/** Creates a new adapter instance */
export declare const adapter: AdapterConstructor;
/** Creates a new adapter instance */
export declare const Adapter: AdapterConstructor;
export {};
