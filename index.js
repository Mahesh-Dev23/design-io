
const Colors = require('./Colors')
const Gradientpatters = require('./CreateGradientBackground')
const colorsConverter = require("./colorsConverter")
const colorScheme = require("./getColorScheme")


exports.designs = ( name, color1, color2, type, mode ) => {

    let finalvalue = color1

    const newColor = new Colors()
    const gradientPattern = new Gradientpatters()

    // returns objec of rgb, hex and hsl color values for input of one rgb/hex value
    newColor.on('color-Values', (color1) =>  finalvalue = newColor.setColor(color1))

    
    // returns object of all colors in sync with input of one rgb/hex value
    newColor.on('all-Colors', (color1) => finalvalue = newColor.setAllColors(color1))

    // returns color schemes arrray based on color wheels for input of one rgb/hex value
    newColor.on('color-Schemes', (color1) =>{
        const colors = newColor.setColorSchemes(color1)
        finalvalue = colors.colorSchemes
    })

    // returns color themes array based on color wheels for input of one rgb/hex value
    newColor.on('color-Themes', (color1) =>{
        let colors = newColor.setColorSchemes(color1)
        finalvalue = colors.colorThemes
    })

    // returns simple two color gradient string for css background/ background-image with input of two rgb colors and gradient type
    newColor.on('gradient', (color1, color2, type) => { finalvalue = newColor.setGradient(color1, color2, type) })

    // returns multiple gradient string for css background/background-image with input of two arrays of rgb color values, gradient style nad background color as option
    gradientPattern.on('gradient-patterns', (type, arr1, arr2, back ) =>{
        finalvalue = gradientPattern.setGrad(type, arr1, arr2, back)
    })

    name === 'color-Values' && newColor.emit( name, color1 )

    name === 'all-Colors' && newColor.emit( name, color1 )

    name === 'color-Schemes' && newColor.emit( name, color1 )

    name === 'color-Themes' && newColor.emit( name, color1 )

    name === 'gradient' && newColor.emit( name, color1, color2, type )

    name === 'gradient-patterns' && gradientPattern.emit( name, type, color1, color2, mode )
    
    return finalvalue
    
    
    
}

