const countData = require("../lib/countData.js")
const {data} = require("../data")


const mockData = [{
    name: 'Dillauti', people: [{
        name: 'Winifred Graham',
        animals: [{name: 'Anoa'}, {name: 'Duck'}, {name: 'Narwhal'}, {name: 'Badger'}, {name: 'Cobra'}, {name: 'Crow'}]
    }]
}]

const mockResultData = [{
    name: 'Dillauti [1]', people: [{
        name: 'Winifred Graham [6]',
        animals: [{name: 'Anoa'}, {name: 'Duck'}, {name: 'Narwhal'}, {name: 'Badger'}, {name: 'Cobra'}, {name: 'Crow'}]
    }]
}]

describe("count data function", () => {
    test("Should return an Empty array if data is Empty", () => {
        expect(countData([])).toHaveLength(0)
    })
    test("Should return an new array with the children count on the parent name", () => {
        expect(countData(mockData)).toStrictEqual(mockResultData)
    })
    test("Expect array return some values", () => {
        expect(countData(data)).toEqual(expect.arrayContaining([expect.objectContaining({
            name: "Dillauti [5]",
            people: expect.arrayContaining([expect.objectContaining({name: "Winifred Graham [6]"}), expect.objectContaining({name: "Blanche Viciani [8]"})])
        })]))
    })

})