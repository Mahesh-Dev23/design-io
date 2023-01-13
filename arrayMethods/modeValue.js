const modevalue = ( arr ) => {
    
        let item = arr[0]
        let newArr = []
        let newValueCount = []
        let index
        const itration = (a, b) => {
            
    
                if(newArr.includes(item)) {
                    index = newArr.indexOf(item) 
                }    
                if( item === a  ){
                    newValueCount[ index ] = newValueCount[ index ] + 1
                }
            
        }
    
        
        for ( let i = 0; i < arr.length; i++ ){
            item = arr[i ]
            if(newArr.length === 0){
                newArr.push(item)  
                newValueCount.push(0)
            }
            if(newArr.includes(item) === false){
                newArr.push(item) 
                newValueCount.push(0)
            }
            
            itration(arr[i])
        }
        
        const max= Math.max(...newValueCount)
        
        return { max: max, maxvalue : arr[arr.length - 1] }
    
}

module.exports = modevalue