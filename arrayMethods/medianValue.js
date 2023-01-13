const medianValue = array => {
    let arr = array.sort((a, b) => a-b)
    let length = array.length
    
    if (length % 2 === 0) {
        return (arr[length / 2 - 1] + arr[length / 2]) / 2;
      }
      
      return arr[(length - 1) / 2];

}

module.exports = medianValue