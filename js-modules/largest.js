const largest = function(array){
    let longestString = '';
    array.forEach(element => element.length >= longestString.length 
        ? longestString = element : null);
    return longestString;
}

module.exports = largest;