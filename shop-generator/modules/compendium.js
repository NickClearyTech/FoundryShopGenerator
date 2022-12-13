import {getFreshMapByRarity} from "./utils/compendium_utils.js";

export async function mapCompendiumContentsToRarity(compendiumName) {
    const itemMap = getFreshMapByRarity();
    const compendium = game.packs.get(compendiumName);
    let items = await compendium.getDocuments();
    for (const item of items) {
        // Check the rarity is not an empty string
        if (!item.system.rarity.toLowerCase()) {
            console.error(`${item.name} does not have a rarity`);
        }
        itemMap.get(item.system.rarity.toLowerCase()).push(item);
    }
    return itemMap;
}