const removeFromArray = function(array, ...items) {
    const toRemove = new Set(items);
    const filteredArray = array.filter( x => !toRemove.has(x));
    return filteredArray;
    //accept multiple options to remove
    //loop through the array to find items to remove
    //return array without removed items
};

// Do not edit below this line
module.exports = removeFromArray;
