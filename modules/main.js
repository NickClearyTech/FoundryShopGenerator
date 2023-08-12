Hooks.on("ready", async function () {
    console.log("Hello there");
    let compendium = game.packs._getVisibleTreeContents()[0].index;
    console.log(game.packs);
    console.log(compendium);
    console.log(game.items);
});
