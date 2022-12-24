import {Constants} from "./values.js";
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
                name: "SHOP_GEN.settings.potion_compendium.name",
                hint: "SHOP_GEN.settings.potion_compendium.hint",
                scope: "user",
                requiresReload: false,
                type: String,
                choices: getCompendiumsOfType("item"),
                config: true,
                default: ""
            }
        );
        // A setting for the user to select which compendium contains spells present in magic shops as scrolls/gems
        game.settings.register(Constants.MODULE_ID, Constants.settings.spell_compendium,
            {
                name: "SHOP_GEN.settings.spell_compendium.name",
                hint: "SHOP_GEN.settings.spell_compendium.hint",
                scope: "user",
                requiresReload: false,
                type: String,
                choices: getCompendiumsOfType("item"),
                config: true,
                default: ""
            }
        );
        // A setting for the user to select which compendium contains magic items to be present in magic shops
        game.settings.register(Constants.MODULE_ID, Constants.settings.magic_item_compendium,
            {
                name: "SHOP_GEN.settings.magic_item_compendium.name",
                hint: "SHOP_GEN.settings.magic_item_compendium.hint",
                scope: "user",
                requiresReload: false,
                type: String,
                choices: getCompendiumsOfType("item"),
                config: true,
                default: ""
            }
        );
        // A setting for the user to select which compendium contains equipment like armor and weapons
        game.settings.register(Constants.MODULE_ID, Constants.settings.equipment_compendium,
            {
                name: "SHOP_GEN.settings.equipment_compendium.name",
                hint: "SHOP_GEN.settings.equipment_compendium.hint",
                scope: "user",
                requiresReload: false,
                type: String,
                choices: getCompendiumsOfType("item"),
                config: true,
                default: ""
            }
        );
        game.settings.register(Constants.MODULE_ID, Constants.settings.price_override,
            {
                name: "SHOP_GEN.settings.price_override.name",
                hint: "SHOP_GEN.settings.price_override.hint",
                scope: "user",
                requiresReload: true,
                type: String,
                config: true,
                default: ""
            }
        );
    }
}