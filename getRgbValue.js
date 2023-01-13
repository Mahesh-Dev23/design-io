const getHslValue = require('./getHslValue')
const getColorScheme = require('./getColorScheme')
const colorScheme = require('./getColorScheme')

const getRgbValue = (hexVal) => {
    let newVal = hexVal.replace('#', '')
    

    if(newVal.length !== 6) return
    
    let rgb
    let hsl

    const values = [ "0" , "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]

    const makeRgbVal = (a, b) => {
        let aVal = values.indexOf(a) * 16
        return aVal + values.indexOf(b) 
    }

    const r = makeRgbVal( newVal.charAt(0) , newVal.charAt(1) )
    const g = makeRgbVal( newVal.charAt(2) , newVal.charAt(3) )
    const b = makeRgbVal( newVal.charAt(4) , newVal.charAt(5) )

    rgb = `${r},${g},${b}`

    hsl = getHslValue(rgb)

   
    return {rgb, hex : hexVal, hsl}
}

module.exports = getRgbValue