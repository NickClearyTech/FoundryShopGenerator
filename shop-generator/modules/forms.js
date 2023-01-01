import {Constants, RuntimeValues} from "./values.js";
import {getValidPresetsOfType} from "./utils/presets.js";

export class ShopGenerator extends FormApplication {
    /**
     * @override
     */
    static get defaultOptions() {
        const defaults = super.defaultOptions;

        const overrides = {
            closeOnSubmit: true,
            height: 'auto',
            id: 'shop-gen',
            submitOnChange: false,
            template: Constants.templates.shop_generator,
            title: "Shop Generator",
            userId: game.userId,
        };
        const mergedOptions = foundry.utils.mergeObject(defaults, overrides);
        return mergedOptions;
    }

    /**
     * @override
     */
    getData(options) {
        const values = {
            preset: RuntimeValues.selectedPreset,
            validShopTypes: Constants.validShopTypes,
            shopType: RuntimeValues.selectedShopType,
            validPresets: RuntimeValues.validPresets,
        };
        console.log(values);
        return values;
    }

    async _handleButtonClick(event) {
        console.log("hi there");
    }

    async _handleSelect(event) {
        const selectedElement = $(event.currentTarget);
        const selectedValue = selectedElement[0].value;
        // Handling if the value that was changed is for the Shop Type
        if (selectedElement[0].id === Constants.shopGenTemplateIDs.shopType) {
            // If the user selects back to the default option, we want to not display anything else, as this could cause issues. So set other values back to defaults
            if (selectedValue === "") {
                RuntimeValues.selectedShopType = null;
                RuntimeValues.validPresets = null;
                this.render();
                return;
            }
            // If the user just changed it back it's existing value, we don't care. Do nothing.
            if (selectedValue === RuntimeValues.selectedShopType) {
                return;
            }
            RuntimeValues.selectedShopType = selectedValue;
            RuntimeValues.validPresets = getValidPresetsOfType(selectedValue);
            this.render();
        }
    }

    /**
     * @override
     */
    activateListeners(html) {
        super.activateListeners(html);
        // html.on("click", "[data-action]", this._handleButtonClick.bind(this));
        html.on("change", "[data-action]", this._handleSelect.bind(this));
    }
}