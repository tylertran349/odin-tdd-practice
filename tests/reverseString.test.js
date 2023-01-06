const reverseString = require('../functions/reverseString');

test('hello becomes olleh', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('Tyler becomes relyT', () => {
    expect(reverseString('Tyler')).toBe('relyT');
});

test('hannah becomes hannah', () => {
    expect(reverseString('hannah')).toBe('hannah');
});