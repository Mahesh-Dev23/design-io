 const getHslValue = require('./getHslValue')

const getHexValue = (rgbVal) => {

    let valWithoutSpace = rgbVal.replace(/ /g, "")
    
    let newVal = valWithoutSpace.split(",")

    let hex

    const values = [ "0" , "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]

    const makeHexVal = (v) => {
        
        let newV
        let firstval
        let secondval
        let decimalvalCalc 
        let decimal
        let finalValue

        if( v === "255" ) return finalValue = "ff"
        if( v === "0" ) return finalValue = "00"
        
        
        if(!finalValue) {

            let aVal = parseInt(v) / 16
            
            let val = aVal.toString().split('.')
            
            firstval = values[val[0]]
            
            
            if(val.length !== 2 ) return
            if( val[1].length < 2) {
                decimalvalCalc = (val[1] * 10) * .16
            }else{
                decimalvalCalc = Math.round( (parseInt(val[1].toString().charAt(0) + val[1].toString().charAt(1)) ) * .16)
            }
            
             
            if(decimalvalCalc >= 10 ) {
                decimal = parseInt(decimalvalCalc.toString().charAt(0) + decimalvalCalc.toString().charAt(1))
            } else if(decimalvalCalc < 10 ) {
                decimal = parseInt(decimalvalCalc.toString().charAt(0))
            } else{
                decimal = parseInt(decimalvalCalc.toString().charAt(0))
            }
            
            secondval = values[decimal]
            
            finalValue = firstval + secondval
        }

        return finalValue 
    }

    const h = makeHexVal(newVal[0])
    const e = makeHexVal(newVal[1])
    const x = makeHexVal(newVal[2])

    hex = `#${h}${e}${x}`

    const hsl = getHslValue(valWithoutSpace)
    
    return {rgb: rgbVal, hex, hsl}
}

module.exports = getHexValue