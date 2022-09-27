const filterAnimalsByFilterParam = require("../lib/filterAnimalsByFilterParam.js")
const {data} = require("../data")


const mockFilterWithRyReturn = [
    {
        name: 'Uzuzozne',
        people: [
            {
                name: 'Lillie Abbott',
                animals: [
                    {
                        name: 'John Dory'
                    }
                ]
            }
        ]
    },
    {
        name: 'Satanwi',
        people: [
            {
                name: 'Anthony Bruno',
                animals: [
                    {
                        name: 'Oryx'
                    }
                ]
            }
        ]
    }
]


describe("filter animals array", () => {
    test("filter with azeze has no result", () => {
        expect(filterAnimalsByFilterParam(data, "azeze")).toHaveLength(0)
    })
    test("filter with ry value", () => {
        expect(filterAnimalsByFilterParam(data, "ry")).toStrictEqual(mockFilterWithRyReturn)
    })
})