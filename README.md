# What is design-io?

Design IO is developed to provide design related support for developers, where there is no design for the project.

# Installation

`npm i @mahesh-dev/design-io --save`

# How to import?

```
const { designs } = require('../design')

import { designs } from 'design-io'
```

> Note: Please note it is a named import.

# How to use?

```sh
const color = designs( "color-Values", "239, 109, 71" )
Returns objec of rgb, hex and hsl color values for input of one rgb/hex value
outPut: {
  inputValue: "239, 109, 71",
  rgb: "239, 109, 71",
  hex: "#ef6d47",
  hsl: "14, 84, 61",
  message: ''
}

If input value is not correct, the variable will return message string only. You can have values when message string is empty.
All inner values of the object are strings.

```

```sh
const allcolor = designs( "all-Colors", "239, 109, 71" )
Returns objec of 34 key value pairs of rgb colors complementing to input caolor value. Find key name below.
outPut: { main, analogous1, analogous2, analogousDark1, analogousDark2, complementary1, complementary2, complementary3, complementary4, grayDark1, grayDark2,grayLight, grayLight1, grayLight2, monochrome1, monochrome2, monochromeDark, monochromeDark2, quadra1, quadra2, quadra3, quadra4, quadraDark1, quadraDark2,quadraDark3, quadraDark4, split1, split2, splitDark1, splitDark2, triadic1, triadic2, triadicDark1, triadicDark2 }

css: background: allcolor.main

```

```sh
const colorScheme = designs( "color-Schemes", "239, 109, 71" )
Returns objec of 10 key and value of array of rgb colors complementing to input caolor value. Find key name below.
outPut: { analogous,complementary,darks,grays,lights,monochromatic,split,square,squareDark,triadic }

css: background: colorScheme.analogous[2]

```

```sh
const colorTheme = designs( "color-Themes", "239, 109, 71" )
Returns objec of 10 key and value of array of rgb colors complementing to input caolor value. Find key name below.
outPut: { contrast,gray_Tones,high_Contrast,soft,subtle,vibrant }

css: background: colorTheme.contrast[3]

```

```sh
const gradient = designs( "gradient", "239, 109, 71", "255, 255, 255", "radial" )
Returns string of gradient value.
outPut: "linear-gradient(rgba(239, 109, 71,1), rgba(255, 255, 255, 1))"

css: background: gradient

```

```sh
const gradPattern = designs( "gradient-patterns", colorTheme.gray_Tones, colorTheme.soft, "grad1", "255, 255, 255" )
Returns multiple gradient string.
outPut: "repeating-linear-gradient(45deg, rgba(170, 176, 192,.5) 40%, rgba(118, 137, 143,.6) 40%, rgba(170, 176, 192,.8) 55%, rgba(170, 192, 186,.4) 70%), repeating-linear-gradient(0deg, rgba(247, 185, 166,.5) 40%, rgba(243, 148, 119,.6) 40%, rgba(247, 185, 166,.8) 55%, rgba(72, 239, 195,.4) 70%), rgba(239, 109, 71,1)"

css: background: gradPattern

> Note: Argument two and three takes array of 5 rgb values.
> Argument four currently have six option grad1 to grad6
> In case y0u want to avoid transparency use last argument which is optional and requires one flat rgb color value.

```

**_Thank you, and happy codesiging._**
