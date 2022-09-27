const filterAnimalsByFilterParam = require("../lib/filterDataByAnimalsSearchName.js")


describe("Filter data by animals search name function", () => {
    test("Search an animals with includes 'azeze' in their name should not have values", () => {
        const result = filterAnimalsByFilterParam([{
            name: 'Dillauti',
            people:
                [{
                    name: 'Winifred Graham',
                    animals:
                        [{name: 'Anoa'},
                            {name: 'Duck'},
                            {name: 'Narwhal'},
                            {name: 'Badger'},
                            {name: 'Cobra'},
                            {name: 'Crow'}]
                }]
        },
            {
                name: 'Tohabdal',
                people:
                    [{
                        name: 'Effie Houghton',
                        animals:
                            [{name: 'Zebra'},
                                {name: 'Ring-tailed Lemur'},
                                {name: 'Fly'},
                                {name: 'Blue Iguana'},
                                {name: 'Emu'},
                                {name: 'African Wild Ass'},
                                {name: 'Numbat'}]
                    }]
            }
        ], "azeze")

        expect(result).toHaveLength(0)
    })
    test("Search an animals with includes 'ry' in their name should have 2 values", () => {
        const result = filterAnimalsByFilterParam([{
            name: 'Uzuzozne',
            people:
                [
                    {
                        name: 'Lillie Abbott',
                        animals:
                            [{name: 'John Dory'},
                                {name: 'Gayal'},
                                {name: 'Hawk'},
                                {name: 'Umbrella Squid'},
                                {name: 'Hyrax'},
                                {name: 'Henkel\'s Leaf-tailed Gecko'}]
                    }
                ]
        },
            {
                name: 'Tohabdal',
                people:
                    [{
                        name: 'Effie Houghton',
                        animals:
                            [{name: 'Zebra'},
                                {name: 'Ring-tailed Lemur'},
                                {name: 'Fly'},
                                {name: 'Blue Iguana'},
                                {name: 'Emu'},
                                {name: 'African Wild Ass'},
                                {name: 'Numbat'}]
                    }]
            },
            {
                name: 'Satanwi',
                people:
                    [{
                        name: 'Elmer Kinoshita',
                        animals:
                            [{name: 'Weasel'},
                                {name: 'Birds'},
                                {name: 'Snakes'},
                                {name: 'Anteater'},
                                {name: 'Groundhog'},
                                {name: 'Ant'},
                                {name: 'Courser'}]
                    },
                        {
                            name: 'Anthony Bruno',
                            animals:
                                [{name: 'Caracal'},
                                    {name: 'Anteater'},
                                    {name: 'Kiwa Hirsuta'},
                                    {name: 'Zooplankton'},
                                    {name: 'Tarantula'},
                                    {name: 'Oryx'}]
                        }]
            }
        ], "ry")
        expect(result).toHaveLength(2)
        expect(result).toStrictEqual([
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
        ])
    })
})


