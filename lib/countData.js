const countData = (data) => {
    return data.map(country => {
        const countPeople = country.people.length
        const people = country.people.map(person => {
            const countAnimals = person.animals.length
            return {
                ...person,
                name: `${person.name} [${countAnimals}]`
            }
        })
        return {
            ...country,
            name: `${country.name} [${countPeople}]`,
            people
        }
    })
}

module.exports = countData