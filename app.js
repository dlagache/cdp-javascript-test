const readArgs = require("./lib/readArgs")
const filterAnimalsByFilterParam = require("./lib/filterAnimalsByFilterParam")
const countData = require("./lib/countData")
const {data} = require("./data")

const main = () => {
    try   {
        const [_process, _indexFile, ...args] = process.argv
       const {filter, count} = readArgs(args)
        let results = [...data]
        if(filter){
            results = filterAnimalsByFilterParam(data, filter)
        }
        if (count){
            results= countData(results)
        }
        if (!results.length){
            console.log("no results")
            process.exit(0)
        }
        console.log(results)
        process.exit(0)
    }catch (e) {
        console.error("### Error ###", e.message)
        process.exit(1)
    }
}

main()