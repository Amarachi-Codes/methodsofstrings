// String-1 -- hasBad
// Given a string, return true if "bad" appears starting at index 0 or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0.

// Examples

// hasBad('badxx') → true
// hasBad('xbadxx') → true
// hasBad('xxbadxx') → false

function hasBad(str){
    if(str.charAt(0)+str.charAt(1)+str.charAt(2) === "bad"){
    return true
    }if(str.charAt(1)+str.charAt(2)+str.charAt(3) === "bad"){
    return true
    }return false
       }console.log(hasBad('badxx'));