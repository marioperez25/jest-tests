const palindrome = require('./palindrome');

test('basic palindrome test', () => {
    expect(palindrome('nurses run')).toBe(true);
    expect(palindrome('nursess run')).toBe(false);
    expect(palindrome('madam')).toBe(true);
    expect(palindrome('mmadam')).toBe(false);
});