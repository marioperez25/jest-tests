const palindrome = require('./palindrome');

test('find palindromes in strings ignoring whitespace and specialchars', () => {
    expect(palindrome('nurses run')).toBe(true);
    expect(palindrome('nursess run')).toBe(false);
    expect(palindrome('madam')).toBe(true);
    expect(palindrome('mmadam')).toBe(false);
});