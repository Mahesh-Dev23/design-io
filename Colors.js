const EventEmitter = require('node:events')
const colorsConverter = require("./colorsConverter")
const colorScheme = require("./getColorScheme")
const validator = require("./validateValue")



class Colors extends EventEmitter{

    constructor( color1, color2, type){
        super()
        this.color = color1
        this.allColors = {}
        this.colorSchemes = {}
        this.gradient = `${color1}, ${color2}`
        this.getvals = (color1) => {
            let convertedvalue = colorsConverter(color1)
            return convertedvalue
        }
        this.getschemes = (hsl) => {
            // if(vals.message !== '') return
            const { main, monochrome1, monochrome2, monochromeDark, monochromeDark2, analogous1, analogous2, analogousDark1, analogousDark2,
                complementary1, complementary2, complementary3, complementary4, triadic1, triadic2, split1, triadicDark1, triadicDark2,
                split2, splitDark1, splitDark2, quadra1, quadra2, quadra3, quadra4, quadraDark1, quadraDark2, quadraDark3, quadraDark4,
                grayDark1, grayDark2, grayLight, grayLight1, grayLight2 } = colorScheme(hsl)
            let colors = {
                monochromatic: [main, monochrome1, monochrome2, monochromeDark2, monochromeDark],
                analogous: [main, analogous1, analogousDark1, analogousDark2, analogous2],
                complementary: [main, complementary1, complementary2, complementary3],
                triadic: [main, triadic1, triadicDark1, triadicDark2, triadic2],
                split: [main, split1, splitDark1, splitDark2, split2],
                square: [main, quadra1, quadra2, quadra3],
                squareDark: [main, quadraDark1, quadraDark2, quadraDark3],
                grays: [main, grayDark1, grayLight, grayLight1, grayLight2, grayDark2],
                darks: [main, monochromeDark, monochromeDark2, quadraDark4, analogousDark2, triadicDark1, quadraDark1,
                    splitDark1, quadraDark2, splitDark2, triadicDark2, complementary3, quadraDark3, analogousDark1],
                lights: [main, monochrome1, monochrome2, complementary2, analogous2, triadic1, quadra1,
                    split1, quadra2, split2, triadic2, complementary1, quadra3, analogous1]
            }
            let themes = {
                soft: [main, monochrome1, monochrome2, split1, quadra2],
                subtle: [main, monochrome1, monochrome2, monochromeDark, monochromeDark2, splitDark1, quadraDark2],
                vibrant: [main, quadraDark4, triadic2, triadicDark2, analogous1, quadraDark3, quadra1, quadraDark1 ],
                gray_Tones: [main, grayLight, grayLight1, grayLight2, grayDark2, grayDark1],
                contrast: [main, triadic1, complementary1, triadic2],
                high_Contrast: [main, monochromeDark, quadraDark3, quadraDark4, triadicDark1, triadicDark2, analogous2]
            }

            return { colors, themes }
        }
    }

    setColor(colorValue) {
        this.colorValue = this.getvals(colorValue)
        return this.colorValue
    }
   
    setAllColors = (colorValue) => { 
        const validValue = this.getvals(colorValue)
        this.allColors = colorScheme(validValue.hsl)
        return this.allColors  
    }

    setColorSchemes = (colorValue) => {
        let vals, allColors, colors = ''
        vals = this.getvals(colorValue)

        //  console.log("vals ",vals)
        if (vals.message !== '') return vals

        this.colorValue = vals

        allColors = colorScheme(vals.hsl)

        colors = this.getschemes(vals.hsl)
        

        this.colorSchemes = { colorValue: vals, allColors, colorSchemes: colors.colors, colorThemes: colors.themes }
        return this.colorSchemes
    }

    setGradient = (color1, color2, type) => {
        let one = validator(color1)
        let two = validator(color2)

        if( one.valid === false) return `First color: ${one.message}`
        if( two.valid === false) return `Second color: ${two.message}`
        let gradient = `${type}-gradient(rgba(${color1},1), rgba(${color2}, 1))`

        type === 'linear' || type === 'radial' || type === 'conic' ? this.gradient = gradient : this.gradient = `Please provide correct gradient type.`

        // if( type !== 'linear' || type !== 'radial' || type !== 'conic') return `Please provide correct gradient type.`
        // this.gradient = `${type}-gradient(rgba(${color1},1), rgba(${color2}, 1))`
        return this.gradient
    }

    
}

module.exports = Colors