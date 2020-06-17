const minus = require('./minus');

test('can substract integer b from integer a', () => {
    expect(minus(3,1)).toBe(2);
    expect(minus(1000,147)).toBe(853);
})

test('returns a number ', () => {
    expect(minus('11','1')).toBe(10);
    expect(minus('110','14')).toBe(96);
})