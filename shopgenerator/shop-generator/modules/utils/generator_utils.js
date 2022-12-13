/*
A simple function to get a random integer between two numbers (min included, max excluded)
 */
export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

/*
A function to get a random list of items based upon an input list, and a number of items
Duplicates are allowed.
 */
export function getRandomItemsWithDuplicates(itemArray, numItems) {
    const itemsToReturn = [];
    const sortedItems = itemArray.sort(() => Math.random());
    for (let i = 0; i<numItems; i++) {
        // Get a random item, push it to the items to return array
        let randomNumber = getRandomInt(0, itemArray.length);
        itemsToReturn.push(sortedItems[randomNumber]);
    }
    return itemsToReturn;
}

/*
A function to get a random list of items based upon an input list, and a number of items
Duplicates are not allowed. If the numItems is larger than the number of possible items, a warning will be thrown, and the entire possible list will be returned.
 */
export function getRandomItemsWithoutDuplication(itemArray, numItems) {
    if (itemArray.length() > numItems) {
        console.warn(`Length of item array is ${itemArray.length} less than the number of items requested, ${numItems}`)
    }
    return itemArray.sort(() => Math.random()).slice(0, numItems);
}