const removeFromArray = function(arr, ...elems) {
    let array = arr
    for(i of elems){
        array = array.filter(num => num !== i)
    }
    
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
