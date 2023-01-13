const arr = require('./arrayMethods/arraymethods')

const getHslvalue = (value) => {
    let newVal = value.split(",")
    let hue = 24;
    let saturation = 100
    let lightness = 0
 

    const r = Number( newVal[0] )
    const g = Number( newVal[1] )
    const b = Number( newVal[2] )

    let rgb = [ r, g, b ]

    const r_percent =  r / 255 
    const g_percent =  g / 255 
    const b_percent =  b / 255 

    const huePositions = [ 0, 120, 240 ]
    const huePoint =   255 / 120
    const basePercent  = 255 / 100

    const arraySort = (x, y, z) => {
        let arrayToSort = [x, y, z]
        let sortedArray = arrayToSort.sort((a, b) => a-b)
        return sortedArray
    }

    

    const sorted_array = arraySort( r,g,b )
    const sorted_percentage = arraySort( r_percent, g_percent, b_percent )
    
    const max = sorted_percentage[2]
    const min = sorted_percentage[0]

    const totalLumaRange = max - min
    const totalMinMax =  max + min

    // lightness
    lightness = Math.round( (totalMinMax / 2) * 100 )
    
    // saturation
    let Saturate 
    if( lightness <= 50 ){ Saturate = ( totalLumaRange / totalMinMax ) * 100 }
    if( lightness > 50  ){ Saturate = ( ( totalLumaRange / ( 2 - totalMinMax )  ) * 100 ) }

    saturation = Math.round( Saturate )
    
    
    const arrayValues = new arr()
    arrayValues.setArrayValues(sorted_array)

    

    let initialPosition = huePositions[rgb.indexOf(sorted_array[2])]
    let diffInPercent = parseInt(sorted_percentage[1] / basePercent)
    const changeHuePosition = parseInt( diffInPercent * huePoint )

    let maxDiffernce = sorted_array[2] - sorted_array[1] 
    let maxDiffernceInPercent = Math.round( maxDiffernce / 255 * 100 )
    diffInPercent = parseInt( maxDiffernceInPercent / basePercent)
    
    if( sorted_array[2] === sorted_array[0] ) return {
            hue : 0,
            saturation : 0,
            lightness : parseInt( sorted_percentage[2])
    }

    let h

    if( sorted_array[2] === r ){
        h = (( g_percent - b_percent) / totalLumaRange) * 60
    }
    if( sorted_array[2] === g ){
        h = (2 + ( b_percent - r_percent) / totalLumaRange) * 60
    }
    if( sorted_array[2] === b ){
        h = (4 + ( r_percent - g_percent) / totalLumaRange) * 60
    }

    hue = Math.round(h)    
    
    
return `${hue}, ${saturation}, ${lightness}`

}
module.exports = getHslvalue