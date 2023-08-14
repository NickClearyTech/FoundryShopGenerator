/**
 * Declares a handful of default values
 */

export class Constants {
    // Name of the module, which is the same as the directory where the module is located
    static MODULE_ID = "shop-generator";

    // The path to the config json file from the root of the shop gen module folder
    static CONFIG_PATH = "storage/config.json"

    // Version number
    static VERSION = "2.0.0";
    static validLogSeverities = ["log", "warn", "error", "info"];
}