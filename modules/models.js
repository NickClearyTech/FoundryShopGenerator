import {Constants} from "./values.js";

export class Config {

    stringify() {
        this.last_update = new Date().toLocaleString();
        this.version = Constants.VERSION;
        return JSON.stringify(this);
    }

    presets

    last_update

    version
}