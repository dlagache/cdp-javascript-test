const readArgs = require("../lib/readArgs")


describe("Read args function", () => {
    test("Should throw Error on missing args", () => {
        expect(() => readArgs([])).toThrow(new Error("missing args"))
    })
    test("Should throw Error on invalid args", () => {
        expect(() => readArgs(["--azeze=truc"])).toThrow(new Error("invalid args"))
    })
    test("Should return params with filter args", () => {
        expect(readArgs(['--filter=ry'])).toHaveProperty("filterArg", "ry")
    })
    test("Should return params with count args", () => {
        expect(readArgs(['--count'])).toHaveProperty("countArg", true)
    })
})