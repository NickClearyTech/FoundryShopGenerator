import {Constants} from "../values.js";
import {Config} from "../models.js";
import {consoleLogging, uiLogging} from "../utils/logging.js";

async function createInitialConfigFile() {
    let configObject = new Config();
    await FilePicker.upload(
        "data",
        `modules/${Constants.MODULE_ID}/storage`,
        new File([configObject.stringify()], "config.json", {
            type: "application/json"
        })
    );
    uiLogging("Successfully created config file", "info")
}

export async function checkExistingConfig() {
    try {
        consoleLogging("Checking existence of config file", "info");
        await foundry.utils.fetchJsonWithTimeout(`/modules/${Constants.MODULE_ID}/${Constants.CONFIG_PATH}`);
    } catch (HttpError) {
        uiLogging("Config does not exist, creating", "info");
        await createInitialConfigFile();
    }
}