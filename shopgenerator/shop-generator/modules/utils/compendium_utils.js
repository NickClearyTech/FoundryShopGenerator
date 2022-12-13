import Constants from "../constants.js";

/*
Returns a list of compendiums of specified type
 */
export function getCompendiumsOfType(compendium_type) {
    let packsToReturn = {};
    if (!Constants.valid_compendium_types.includes(compendium_type.toLowerCase())) {
        console.log("ERROR: Unsupported compendium type");
    }
    for (let pack of game.packs) {
        if (pack.metadata.type.toLowerCase() === compendium_type.toLowerCase()) {
            packsToReturn[pack.metadata.id] = pack.metadata.label;
        }
    }
    return packsToReturn;
}

/*
Creates a new map with the keys being the possible rarities, and the values as empty arrays
 */
export function getFreshMapByRarity() {
    const mapToReturn = new Map();
    for (const rarity of Object.keys(Constants.rarities)) {
        mapToReturn.set(rarity, []);
    }
    return mapToReturn;
}