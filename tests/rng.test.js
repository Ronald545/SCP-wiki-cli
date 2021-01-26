const { isExportDeclaration } = require("typescript");
const rng = require("../bin/functions/rng");

test('generate random number into string', () => {
    let randomString = rng()
    expect(randomString).toBeDefined()
    expect(parseInt(randomString)).toBeLessThan(100)
    expect(randomString).toMatch(/(0)([0-9])([0-9])/)
})