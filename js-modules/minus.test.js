const minus = require('./minus');

test('can substract integer b from integer a', () => {
    expect(minus(3,1)).toBe(2);
})

test('can substract numbers in string a from numbers in string b', () => {
    expect(minus('11','1')).toBe(10);
    expect(minus('110','14')).toBe(96);
})