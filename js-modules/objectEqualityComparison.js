function objectEqualityComparison(obj1,obj2) {
    let props = Object.getOwnPropertyNames(obj1);
    let result = [];
    for(let i = 0; i < props.length; i++) {
        obj1[props[i]] == obj2[props[i]] ? result.push(true) : null
    }
    result = result.length === props.length;
    return result;
}

module.exports = objectEqualityComparison;