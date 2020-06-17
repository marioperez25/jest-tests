function toUpperCase(string){
    let isMyInputValid = (typeof string === "string");
    return isMyInputValid ? string.toUpperCase() : 'not a string';
}

module.exports = toUpperCase;