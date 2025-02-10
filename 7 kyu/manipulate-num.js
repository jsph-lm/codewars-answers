function manipulate(num) { 
  
  let numAsString = num.toString()
  let half = numAsString.length/2 
  let result = ''
  
    if (numAsString.length % 2 == 0) {

        for (let i=0; i < numAsString.length; i++) {
             if ( i < half ) {
               result += numAsString[i]
             }  else {
               result += '0'
             }
          }
    } else {
        for (let i=0; i < numAsString.length; i++) {
           if (i < half.ceil ) {
             result += numAsString[i]
           } else {
             result += '0'
           }
        }
          }      
  
  return parseInt(result); // your code here 
} 
