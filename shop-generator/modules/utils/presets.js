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