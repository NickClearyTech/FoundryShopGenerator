import Settings from "./settings.js";
import {setDefaultPresets} from "./utils/player_config.js";
import {initializePricingOverride, getObjectPrice} from "./utils/pricing.js";
import {ShopGenerator} from "./forms.js";


Hooks.on("ready", async function () {
    new Settings().registerSettings();
    await setDefaultPresets();
    initializePricingOverride();
    const items = await game.packs.get("world.spells").getDocuments();
});

Hooks.on("renderItemDirectory", (itemDirectory, html) => {
    const itemHeaders = html.find(`[class="directory-header"]`)
    const tooltip = game.i18n.localize("SHOP-GEN.UI.items-button")
    itemHeaders.append(`<button type='button' class='shop-generator-icon-button flex0' title='${tooltip}'><i class='fa-solid fa-shield'> Shop Generator</button>`);
    html.on("click", ".shop-generator-icon-button", (event) => {
        console.log("clicked");
        const shopgen = new ShopGenerator();
        shopgen.render(true, {});
    });
});
