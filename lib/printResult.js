const util = require('util')


const printResult = (results) => {
    console.log(util.inspect(results, {showHidden: false, depth:null, colors: true}))
}

module.exports = printResult