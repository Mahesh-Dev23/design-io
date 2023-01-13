
const meanValue = arr => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += Number(arr[i]) 
    }
    
    return total / arr.length
}

module.exports = meanValue