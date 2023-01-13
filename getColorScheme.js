

const colorScheme = (hsl) => {
    
    let newHSL = hsl.split(",")

    let hue = Number(newHSL[0]) 
    let saturation = Number(newHSL[1])
    let lightness = Number(newHSL[2])

    
    
    const hslToRgb = (h, s, l) => {
      let newHue = h
        if( h > 360 ) { newHue = h - 360 }
        if( h < 0) { newHue = 360 + h }          
        s /= 100;
        l /= 100;

        
        const k = n => (n + newHue / 30) % 12;
        const a = s * Math.min(l, 1 - l);
        const f = n =>
          l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

          let r = Math.round(255 * f(0))
          let g = Math.round(255 * f(8))
          let b = Math.round(255 * f(4))

        return `${r}, ${g}, ${b}`;
      }

    const main = hslToRgb(hue, saturation, lightness)

    const quadra1 = hslToRgb(hue + 90, saturation, lightness)  
    
    const quadra2 = hslToRgb(hue + 180, saturation, lightness)

    const quadra3 = hslToRgb(hue + 270, saturation, lightness)

    const quadra4 = hslToRgb(hue , saturation, lightness - 20)

    

    const quadraDark1 = hslToRgb(hue + 90, saturation, lightness - 30)  
    
    const quadraDark2 = hslToRgb(hue + 180, saturation, lightness - 30)

    const quadraDark3 = hslToRgb(hue + 270, saturation, lightness - 30)

    const quadraDark4 = hslToRgb(hue , saturation, lightness - 30)

    

    const triadic1 = hslToRgb(hue + 120, saturation, lightness)

    const triadic2 = hslToRgb(hue + 240, saturation, lightness)

    const triadicDark1 = hslToRgb(hue + 120, saturation, lightness - 20)

    const triadicDark2 = hslToRgb(hue + 240, saturation, lightness - 40)

    

    const analogous1 = hslToRgb(hue - 30, saturation, lightness)

    const analogous2 = hslToRgb(hue + 30, saturation, lightness)

    const analogousDark1 = hslToRgb(hue - 30, saturation, lightness - 20)

    const analogousDark2 = hslToRgb(hue + 30, saturation, lightness - 20)

    

    const complementary1 = hslToRgb(hue + 180, saturation, lightness)

    const complementary2 = hslToRgb(hue + 180, saturation, lightness - 20)

    const complementary3 = hslToRgb(hue + 180, saturation, lightness - 40)

    const complementary4 = hslToRgb(hue , saturation, lightness - 30)

    

    const monochrome1 = hslToRgb(hue, saturation, lightness + 10 )

    const monochrome2 = hslToRgb(hue, saturation, lightness + 20 )

    const monochromeDark = hslToRgb(hue, saturation, lightness  - 10 )

    const monochromeDark2 = hslToRgb(hue, saturation, lightness - 20 )


    
    const split1 = hslToRgb(hue + 150, saturation, lightness)

    const split2 = hslToRgb(hue + 210, saturation, lightness)

    const splitDark1 = hslToRgb(hue + 150, saturation, lightness -30)

    const splitDark2 = hslToRgb(hue + 210, saturation, lightness -30)

    

    const grayDark1 = hslToRgb(hue + 210, 7, lightness -30)

    const grayDark2 = hslToRgb(hue + 150, 7, lightness -30)

    const grayLight = hslToRgb(hue + 180, 10, lightness -10 )

    const grayLight1 = hslToRgb(hue + 210, 15, lightness +10)

    const grayLight2 = hslToRgb(hue + 150, 15, lightness +10)
    

    return { main, monochrome1, monochrome2, monochromeDark, monochromeDark2, analogous1, analogous2, analogousDark1, analogousDark2, complementary1, complementary2, complementary3, complementary4, triadic1, triadic2, split1, triadicDark1, triadicDark2, split2, splitDark1, splitDark2, quadra1, quadra2, quadra3, quadra4, quadraDark1, quadraDark2, quadraDark3, quadraDark4, grayDark1, grayDark2, grayLight, grayLight1, grayLight2 }
}

module.exports = colorScheme