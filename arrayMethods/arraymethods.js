const modeValue = require("./modeValue")
const meanValue = require("./meanValue")
const medianValue = require("./medianValue")
const range = require("./range")

class ArrayValues {
    constructor( array ){
        this.mean = 0,
        this.median = 0,
        this.mode = 0,
        this.range = [0,0]
    }

    setArrayValues(array){
        this.mode = modeValue(array)
        this.mean = meanValue(array)
        this.median = medianValue(array)
        this.range = range(array)

        return { mean : this.mean, median: this.median, mode : this.mode, range : this.range }
    } 
}

module.exports = ArrayValues