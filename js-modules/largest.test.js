const largest = require('./largest');
let mockArray1 = ['1' , '12', '123'];
let mockArray2 = ['100' , '12', '123','testing'];
let mockArray3 = ['test' , 'data', 'dataTest','long'];

test('return the largest string in the array',()=>{
    expect(largest(mockArray1)).toBe('123');
    expect(largest(mockArray2)).toBe('testing');
    expect(largest(mockArray3)).toBe('dataTest');
})