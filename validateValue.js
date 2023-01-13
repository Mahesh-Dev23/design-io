const findValidValue = (val) => {
    
    if(val=== '') return
    let message = ''
    let valid = false
    let valArr, textVal,  digitval, hashVal = ''
    let  allTextVal = null
    
    if( val.length > 13) { message = 'Please provide valid inputs!' }

    valArr = val.split('')

    digitval = val.match(/\d/g)
    textVal = val.match(/[abcdef ,#]/gi)
    
    hashVal = val.match(/#/gi)
    
    
    
    if( digitval === null ) { digitval = '' } 
    if( textVal === null ) { textVal = ''} 
    if( allTextVal === null ) { allTextVal = ''}
    if( hashVal === null ) { hashVal = ''}
    
    
    for(let i = 0; i < val.length; i++){
        if( digitval.includes(val[i]) === false ) {
            if( textVal.includes(val[i]) === false ){
                allTextVal += (val[i])
            }
        }
    }


    if( hashVal.length > 0 && val[0] !== '#' ) return {message : `With HEX value add character '#' once at begining!` , valid: false }

    if( allTextVal.length > 0) return { message : `Invalid Characters: '${allTextVal}'`, valid: false }
    
    if( val.length !== (digitval.length + textVal.length)) { message = 'All inputs are not correct!' }
    
    if( digitval.length > 0 && val.includes(',') && digitval.length === (val.length - textVal.length) )  {
        
         textVal = val.match(/[abcdef]/gi)
        
        if( textVal === null ) { textVal = ''}
        
        
        if( textVal.length > 0 && digitval.length === 0) { 
            message = 'For rgb value provide only digits.' 
        }else{

            valArr = val.replace(' ', '').split(',')
            

            if(valArr.length !== 3){
                if( valArr.length > 3 ) { 
                    message = 'For rgb provide not more than 3 coma seperated values!' 
                }else if(  valArr.length < 3 ) { 
                    message = 'For rgb provide 3 coma seperated values!' 
                }
            }

            if( valArr.length === 3 ) {
                message = ''
                for(let i = 0; i < valArr.length; i++){
                    
                    if( valArr[i] < 0 || valArr[i] > 255 ) { 
                        message = 'Value should be between 0 to 255' 
                    }else{
                        valid = true 
                    }
                }
                
            }
        } 
        
        
     } else {
        if( val.length > 7 || val.length < 6) { message = 'Provide 6 character HEX value' }
        if( val.match(/\s/g)) { message = 'No space in HEX value' }
        let hashVal = val.match(/#/gi)
       
        textVal = val.match(/[abcdef]/gi)
        if( textVal === null ) { textVal = ''} 
        if( val[0] === '#' && val.length === 7){ 
            
            valid = true }
        if( val[0] !== '#' && val.length === 6){ 
             
            valid = true }
     }
   
    return { message, valid }
}

module.exports = findValidValue    