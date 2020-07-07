const objectEqualityComparison = require('./objectEqualityComparison')
const myObj1 = {
    name: 'john',
    lastname: 'doe'
}

const myObj2 = {
    name: 'john',
    lastname: 'doe'
}

const myObj3 = {
    name: 'john',
    lastname: 'wick' 
}

test('equal objects return true', () => {
    expect(objectEqualityComparison(myObj1,myObj2)).toBe(true);
})

test('equal objects return true', () => {
    expect(objectEqualityComparison(myObj1,myObj3)).toBe(false);
})