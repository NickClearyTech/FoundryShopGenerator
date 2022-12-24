import {Constants} from "../values.js";
import { uiLogging } from "./logging.js";

/*
Returns a list of compendiums of specified type
 */
export function getCompendiumsOfType(compendiumType) {
    let packsToReturn = {};
    if (!Constants.valid_compendium_types.includes(compendiumType.toLowerCase())) {
        uiLogging(`Unsupported compendium type: ${compendiumType}`, "error");
    }
    for (let pack of game.packs) {
        if (pack.metadata.type.toLowerCase() === compendiumType.toLowerCase()) {
            packsToReturn[pack.metadata.id] = pack.metadata.label;
        }
    }
    return packsToReturn;
}

export function getRarities(shopType) {
    if (shopType === "spell") {
        return Constants.spellLevels;
    }
    return Constants.rarities;
}

/*
Creates a new map with the keys being the possible rarities, and the values as empty arrays
 */
export function getFreshMapByRarity(shopType) {
    const mapToReturn = new Map();
    for (const rarity of Object.keys(getRarities(shopType))) {
        mapToReturn.set(rarity, []);
    }
    return mapToReturn;
}