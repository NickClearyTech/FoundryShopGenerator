import {Constants} from "../values.js";

/**
 * A helper function that returns an object containing all present IDs and names for the specified type
 * @param type Shop Type
 * @returns {{Object}} {preset_id: {displayName: presentName}}
 */
export function getValidPresetsOfType(type) {
    let shopTypePresets = game.users.current.getFlag(Constants.MODULE_ID, Constants.playerFlag)["presets"][type];
    let presets = {};
    for (const key of Object.keys(shopTypePresets)) {
        presets[key] = {displayName: shopTypePresets[key].name};
    }
    return presets;
}

/**
 * A helper function that returns the specified preset as an object
 * @param type Shop Type
 * @param presetID The ID of the preset to be returned
 * @returns {{Object} Preset object
 */
export function getPreset(type, presetID) {
    let preset = game.users.current.getFlag(Constants.MODULE_ID, Constants.playerFlag)["presets"][type][presetID];
    delete preset.name; // We delete the "name" key because it's useless in terms of rendering our options
    delete preset.default; // Same thing with the "default" attribute
    return preset;
}