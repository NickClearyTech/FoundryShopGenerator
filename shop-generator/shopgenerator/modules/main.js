console.log("Hello World! This code runs immediately when the file is loaded.");

function successcallback(result) {
    result.forEach(element => console.log(element));
}

function failcallback(result) {
    conosle.log("Sad :(");
}

Hooks.on("init", function() {
    console.log("This code runs once the Foundry VTT software begins its initialization workflow.");
});

Hooks.on("ready", async function () {
    console.log("This code runs once core initialization is ready and game data is available.");
    let collections = game.collections;
    console.log("---------");
    console.log(collections);
    console.log("--------------sex222222");
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
