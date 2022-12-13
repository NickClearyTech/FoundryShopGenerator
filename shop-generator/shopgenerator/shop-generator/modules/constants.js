/**
 * Declares a handful of default values
 */
export default class Constants {
    static MODULE_ID = "shop-generator";

    static valid_compendium_types = [
        "actor",
        "item",
        "card stack",
        "journal entry",
        "macro",
        "playlist",
        "rollable table",
        "scene",
        "adventure"
    ];

    static settings = {
        potion_compendium: "PotionCompendium",
        spell_compendium: "SpellCompendium",
        magic_items_compendium: "MagicItemCompendium",
        equipment_compendium: "EquipmentCompendium",
        use_merchant: "UseDiscerningMerchantGuide"
    }

    static rarities = {
        common: "Common",
        uncommon: "Uncommon",
        rare: "Rare",
        veryrare: "Very Rare",
        legendary: "Legendary"
    }
}