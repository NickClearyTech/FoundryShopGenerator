import Constants from "./constants.js";
import {getCompendiumsOfType} from "./utils/compendium_utils.js";

/**
 * Handles the setting and fetching of all settings in the module
 */
export default class Settings {
    /**
     * Register all settings
     */
    registerSettings() {
        // A setting for the user to select which compendium to use for the potion shop generation.
        game.settings.register(Constants.MODULE_ID, Constants.settings.potion_compendium,
            {
                name: `SHOP_GEN.settings.potion_compendium.name`,
                hint: "SHOP_GEN.settings.potion_compendium.hint",
                scope: "client",
                requiresReload: false,
                type: String,
                choices: getCompendiumsOfType("item"),
                config: true,
                default: true,
            }
        );
    }
}