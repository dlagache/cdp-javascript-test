const countData = require("../lib/countData.js")


describe("Count data function", () => {
    test("Should return an Empty array if data is Empty", () => {
        expect(countData([])).toHaveLength(0)
    })
    test("Should return a new array with the people and animals count on side name", () => {
        const result = countData([{
                name: 'Dillauti', people: [{
                    name: 'Winifred Graham',
                    animals: [{name: 'Anoa'}, {name: 'Duck'}, {name: 'Narwhal'}, {name: 'Badger'}, {name: 'Cobra'}, {name: 'Crow'}]
                }]
            }]
        )
        expect(result).toStrictEqual([{
            name: 'Dillauti [1]', people: [{
                name: 'Winifred Graham [6]',
                animals: [{name: 'Anoa'}, {name: 'Duck'}, {name: 'Narwhal'}, {name: 'Badger'}, {name: 'Cobra'}, {name: 'Crow'}]
            }]
        }])
    })
})
