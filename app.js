const readArgs = require("./lib/readArgs")
const filterAnimalsByFilterParam = require("./lib/filterDataByAnimalsSearchName")
const countData = require("./lib/countData")
const {data} = require("./data")
const printResult = require("./lib/printResult")


const main = () => {
    try   {
        const [_process, _indexFile, ...args] = process.argv
       const {filterArg, countArg} = readArgs(args)
        let results = [...data]
        if(filterArg){
            results = filterAnimalsByFilterParam(results, filterArg)
        }
        if (countArg){
            results= countData(results)
        }
        if (!results.length){
            console.log("no results")
            process.exit(0)
        }
        printResult(results)
        process.exit(0)
    }catch (e) {
        console.error("### Error ###", e.message)
        process.exit(1)
    }
}

main()