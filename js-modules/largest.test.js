const largest = require('./largest');
let mockArray1 = ['1' , '12', '123'];
let mockArray2 = ['100' , '12', '123','testing'];
let mockArray3 = ['test' , 'dataTest', 'dataTest','long'];

test('return the largest string in the array',()=>{
    expect(largest(mockArray1)).toBe('123');
    expect(largest(mockArray2)).toBe('testing');
})

test('will return an array of repeated strings with the largest strings', ()=>{
    expect(largest(mockArray3)).toStrictEqual(['dataTest', 'dataTest']);
})