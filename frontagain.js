// String-1 -- frontAgain
// Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".

// Examples

// frontAgain('edited') → true
// frontAgain('edit') → false
// frontAgain('ed') → true

function frontAgain(str){
    if(str=== ""){
    return false
    }if(str.charAt(0)=== str.charAt(str.length-2) && str.charAt(1) ===str.charAt(str.length-1)){
       return true
       }return false
  }console.log(frontAgain('ed'));