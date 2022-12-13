import Constants from "./constants.js";
import {mapCompendiumContentsToRarity} from "./compendium.js";
import {getRandomInt, getRandomItemsWithDuplicates, getRandomItemsWithoutDuplication} from "./utils/generator_utils.js";

export async function generateItemShop(shopSettings, type) {
    let chatMessage = "<h1>Shop Contents</h1>";
    const compendiumName = game.settings.get(Constants.MODULE_ID, Constants["settings"][`${type}_compendium`]);
    const compendiumContents = await mapCompendiumContentsToRarity(compendiumName);
    for (const rarity of Object.keys(Constants.rarities)) {
        const raritySettings = shopSettings[`${rarity}`];
        let items = [];
        if (raritySettings.type === "range") {
            items = getRandomItemsWithDuplicates(compendiumContents.get(`${rarity}`), getRandomInt(raritySettings.min, raritySettings.max++));
        }
        // If no items were returned, we don't want to mention it in the message
        if (items.length > 0) {
            chatMessage = chatMessage.concat(`<h2>${Constants.rarities[rarity]}:</h2><br/><ul>`);
            for (const item of items) {
                chatMessage = chatMessage.concat(`<li>${item.name}</li>`);
            }
            chatMessage = chatMessage.concat(`</ul>`);
        }
    }
    ChatMessage.create({
        content: chatMessage
    });
}