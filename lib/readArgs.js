
const validArgs = new Set(["filter", "count"])

const readArgs = (args) => {
    if(!args.length) throw new Error("missing args")

    const params = {}
    for (const arg of  args){
        const splitArg =  arg.split("=")
        const key = splitArg[0].replace("--", "")
        if(!validArgs.has(key)){
            throw new Error("invalid args")
        }
        let value
        switch (key){
            case "filter":
                value = splitArg[1]
                break
            case "count":
                value = true
                break
        }
        if(!value) throw new Error("invalid values")

        Object.assign(params, {[key] : value})
    }
    return params
}

module.exports = readArgs