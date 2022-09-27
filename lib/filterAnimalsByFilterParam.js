const filterAnimalsByFilterParam = (data, param) => {
    return data.reduce((r,v) => {
        let country = {...v, people: []}
        for(const person of v.people){
            const animalsFound = []
            for (const animal of person.animals){
                if(animal.name.includes(param)){
                    animalsFound.push(animal)
                }
            }
            if(animalsFound.length){
                country = {...country, people: [...country.people, {...person, animals: animalsFound}]}
            }
        }
        if(country.people.length){
            r = [...r, country]
        }
        return r
    }, [])
}

module.exports = filterAnimalsByFilterParam