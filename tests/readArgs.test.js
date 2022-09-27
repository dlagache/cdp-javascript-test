const readArgs = require("../lib/readArgs")


describe("Read args function", () => {
    test("Throw Error on missing args", () => {
        expect(() => readArgs([])).toThrow(new Error("missing args"))
    })
    test("Throw Error on invalid args", () => {
        expect(() => readArgs(["--azeze=truc"])).toThrow(new Error("invalid args"))
    })
    test("Return params with filter args", () => {
        expect(readArgs(['--filter=ry'])).toHaveProperty("filter", "ry")
    })
    test("Return params with count args", () => {
        expect(readArgs(['--count'])).toHaveProperty("count", true)
    })
})