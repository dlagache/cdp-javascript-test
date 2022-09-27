const filterDataByAnimalsSearchName = (data, searchValue) => {
    return data.reduce((r, v) => {
        let country = {...v, people: findPeopleWithAnimal(v.people, searchValue)}
        if (country.people.length) {
            r = [...r, country]
        }
        return r
    }, [])
}

const findPeopleWithAnimal = (people, searchName) => people.reduce((returnedPeople, person) => {
    const animals = findAnimalBySearchName(person.animals, searchName)
    if (animals.length) {
        returnedPeople = [...returnedPeople, {
            name: person.name,
            animals
        }]
    }
    return returnedPeople
}, [])

const findAnimalBySearchName = (animals, searchName) => animals.filter(animal => animal.name.includes(searchName))

module.exports = filterDataByAnimalsSearchName