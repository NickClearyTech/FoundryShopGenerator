# FoundryShopGenerator
A module to select random items of varying rarities and send a message in chat with a shop's stock.

The user is able to customize the number of items of each rarity which are present in the shop. These settings can be saved as presets, and loaded later by the player for easy usage again.


Shops can be generated of four types:

- Magic Item
- Equipment
- Magic Spells (spell scrolls)
- Potions

To begin, in the settings, select a compendium from which each of these items will be drawn. For the magic spells one, select a compendium of spells.


Then, under the items screen, select the "shop generator".

Select a shop type, and a preset. (Four presets of each type are defined by default, but you can create more).

Then, adjust the settings, and click generate. A chat message will be sent telling the players which is available at that particular shop.


Price Overrides:

By default, an items price will be displayed as the price on the item itself. However, if a price overides json is defined in the settings, and the item is present in the price overrides than that price will be used. An example of a valid price override can be found [here](https://github.com/NickClearyTech/FoundryShopGenerator/blob/v1.0.3/shop-generator/modules/shop_overrides_example.json)
