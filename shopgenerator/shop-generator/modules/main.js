import Settings from "./settings.js";
import {getCompendiumsOfType} from "./utils/compendium_utils.js";

function successcallback(result) {
    result.forEach(element => console.log(element));
}

function failcallback(result) {
    conosle.log("Sad :(");
}

Hooks.on("init", function () {
    console.log("This code runs once the Foundry VTT software begins its initialization workflow.");
});

Hooks.on("ready", async function () {
    console.log("-------This code runs once core initialization is ready and game data is available.");
    new Settings().registerSettings();
    console.log(getCompendiumsOfType("item"));
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
    console.log(itemDirectory);
    console.log("hi there!");
    const itemHeaders = html.find(`[class="directory-header"]`)
    itemHeaders.append("<p>LMAO HI THERE</p>")
});