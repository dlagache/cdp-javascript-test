const validArgs = new Set(["filter", "count"])

const readArgs = (args) => {
    if (!args.length) throw new Error("missing args")

    const params = {}
    args.forEach(arg => {
        const splitArg = arg.split("=")
        const key = splitArg[0].replace("--", "")
        if (!validArgs.has(key)) {
            throw new Error("invalid args")
        }
        if (key === "filter") {
            if (!splitArg[1]) {
                throw new Error("invalid value")
            }
            Object.assign(params, {filterArg: splitArg[1]})
        }
        if (key === "count") {
            Object.assign(params, {countArg: true})
        }
    })
    return params
}

module.exports = readArgs