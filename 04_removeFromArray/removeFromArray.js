const removeFromArray = function(array, ...moreParams) {
    return array.filter(element => !moreParams.includes(element));
    
};

// Do not edit below this line
module.exports = removeFromArray;

