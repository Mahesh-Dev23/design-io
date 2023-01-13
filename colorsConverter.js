 const rgb = require('./getRgbValue')
 const hex = require('./getHexValue')
 const findValidValue = require('./validateValue')
 
 const colorsConverter = (inputValue) => {
    
    let colorValue = "255, 255, 255"
    
    const inputValidator = findValidValue(inputValue)

    let message  = inputValidator.message
    let valid = inputValidator.valid

    if( valid === false) return {message}

    if( inputValue.includes(',')) {
      colorValue = hex(inputValue)
    } else {
      colorValue = rgb(inputValue)
    } 

    
   return { inputValue, ...colorValue, message }

 }
 module.exports = colorsConverter
