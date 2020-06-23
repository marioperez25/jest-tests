const largest = function(array){
    let longestString = '';
    let longestStrings;
    let result;

    // filter the largest string possible
    array.forEach(
        element => {
            element.length >= longestString.length 
            ? longestString = element : null;
        }
    );

    // filter all items that match the largest string
    longestStrings = array.filter( 
        string => string.length ===  longestString.length
    );
    
    // determine output if single or multiple results
    let isThereMoreThanOneResult = longestStrings.length >= 2;
    isThereMoreThanOneResult ?
        result = longestStrings
        : result = longestString
    
    return result;
}

module.exports = largest;