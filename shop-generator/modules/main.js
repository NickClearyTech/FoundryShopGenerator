import Settings from "./settings.js";
import {getCompendiumsOfType, getFreshMapByRarity} from "./utils/compendium_utils.js";
import {mapCompendiumContentsToRarity} from "./compendium.js";
import {generateItemShop} from "./generator.js";
import {Constants,RuntimeValues} from "./values.js";
import {setDefaultPresets} from "./utils/player_config.js";
import {initializePricingOverride} from "./utils/pricing.js";


Hooks.on("ready", async function () {
    new Settings().registerSettings();
    await setDefaultPresets();
    initializePricingOverride();
    console.log(RuntimeValues.priceOverride);
    // const data = await foundry.utils.fetchJsonWithTimeout("modules/shop-generator/modules/presets.json");
    // await generateItemShop(data["presets"]["spell"]["metropolis"], "spell");
    // const json = await response.json();
    // console.log(json);
    // const thingies = await game.packs.get("world.potions").getDocuments();
    // console.log(thingies);
    // console.log(game.i18n.localize('SHOP_GEN.settings.potion_compendium.Hint'));
    // let collections = game.collections;
    // console.log("---------");
    // console.log(collections);
    // ChatMessage.create({
    //     content: "<h1>Hello there bois</h1><p>ooooffff</p>"
    // });
    // createSettings();
    // const iterator = collections.entries();
    // let value = iterator.next().value;
    // while (value != null) {
    //     console.log(value);
    //     value = iterator.next().value;
    // }
    // let application = application.SidebarTab.SidebarDirectory.ItemDirectory;
    // console.log(application);
    // let packs = game.packs;
    // console.log("------------")
    // const pack = packs.get("world.all-items");
    // console.log(pack);
    // console.log(pack.getDocuments());
    // let docs = await pack.getDocuments().then(successcallback, failcallback);

    // const iterator = pack.entries();
    // console.log(iterator);
    // let value = iterator.next();
    // console.log(value);
    // // while (value != null) {
    // //     console.log(value);
    // //     value = iterator.next().value;
    // // }
    // // console.log(packs.get("world.all-items"));
});

Hooks.on("renderItemDirectory", (itemDirectory, html) => {
    const itemHeaders = html.find(`[class="directory-header"]`)
    const tooltip = game.i18n.localize("SHOP-GEN.UI.items-button")
    itemHeaders.append(`<button type='button' class='shop-generator-icon-button flex0' title='${tooltip}'><i class='fa-solid fa-shield'> Shop Generator</button>`);
    html.on("click", ".shop-generator-icon-button", (event) => {
        console.log("clicked");
    });
});
