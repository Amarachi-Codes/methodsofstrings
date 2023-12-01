// String-1 -- seeColor
// Given a string, if the string begins with "red" or "blue" return that color string, otherwise return the empty string.

// Examples

// seeColor('redxx') → red
// seeColor('xxred') →
// seeColor('blueTimes') → blue

function seeColor(str){
    if(str.startsWith("red")){
       return "red"
       }if(str.startsWith("blue")){
           return "blue"
           }return ""
  }console.log(seeColor('redxx'));