import Constants from "../constants.js";

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

