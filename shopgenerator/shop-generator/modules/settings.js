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
                name: "SHOP_GEN.settings.potion_compendium.name",
                hint: "SHOP_GEN.settings.potion_compendium.hint",
                scope: "world",
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
                scope: "world",
                requiresReload: false,
                type: String,
                choices: getCompendiumsOfType("item"),
                config: true,
                default: ""
            }
        );
        // A setting for the user to select which compendium contains magic items to be present in magic shops
        game.settings.register(Constants.MODULE_ID, Constants.settings.magic_items_compendium,
            {
                name: "SHOP_GEN.settings.magic_item_compendium.name",
                hint: "SHOP_GEN.settings.magic_item_compendium.hint",
                scope: "world",
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
                scope: "world",
                requiresReload: false,
                type: String,
                choices: getCompendiumsOfType("item"),
                config: true,
                default: ""
            }
        );
        // A setting to allow for the user to specify whether to use the Discerning Merchant's Price Guide
        game.settings.register(Constants.MODULE_ID, Constants.settings.use_merchant,
            {
                name: "SHOP_GEN.settings.use_merchant_guide.name",
                hint: "SHOP_GEN.settings.use_merchant_guide.hint",
                scope: "world",
                requiresReload: false,
                type: Boolean,
                default: true,
                config: true
            }
        );
    }
}