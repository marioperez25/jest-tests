const toUpperCase = require('./toUpperCase');

test('shuld transform string types into upper case', ()=>{
    expect(toUpperCase('test')).toBe('TEST');
})

test('if incorrect type provided error should be returned', ()=>{
    expect(toUpperCase(1)).toBe('not a string');
    expect(toUpperCase({name: 'bob'})).toBe('not a string');
})