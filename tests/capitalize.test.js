const capitalize = require('../functions/capitalize');

test('tyler becomes Tyler', () => {
    expect(capitalize('tyler')).toBe("Tyler");
});

test('bob becomes Bob', () => {
    expect(capitalize('bob')).toBe("Bob");
})