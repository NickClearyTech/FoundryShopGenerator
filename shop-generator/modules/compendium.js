import {getFreshMapByRarity} from "./utils/compendium_utils.js";
import {consoleLogging} from "./utils/logging.js";

export async function mapCompendiumContentsToRarity(compendiumName, shopType) {
    const itemMap = getFreshMapByRarity(shopType);
    const compendium = game.packs.get(compendiumName);
    let items = await compendium.getDocuments();
    let rarityOrLevel = "rarity";
    if (shopType == "spell") {
        rarityOrLevel = "level";
    }
    for (const item of items) {
        // Check the rarity is not an empty string
        if (!item.system[rarityOrLevel].toString().toLowerCase()) {
            consoleLogging(`${item.name} does not have a ${rarityOrLevel}`, "error");
        }
        // We've gotta convert to string here just to prevent issues with the fact that spell levels are an integer
        itemMap.get(item.system[rarityOrLevel].toString().toLowerCase()).push(item);
    }
    return itemMap;
}