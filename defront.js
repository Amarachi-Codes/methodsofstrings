// String-1 -- deFront
// Given a string, return a version without the first 2 chars. Except keep the first char if it is 'a' 
// and keep the second char if it is 'b'. The string may be any length. Harder than it looks.

// Examples

// deFront('Hello') → llo
// deFront('java') → va
// deFront('away') → aay

function deFront(str){
    let strlen = str.slice(2)
    if(str.charAt(0) === "a" && str.charAt(1) === "b" ){
        // let strlen = str.slice(str.length-2) 
        return str.charAt(0)+str.charAt(1)+ strlen
    }if(str.charAt(0) === "a"){
        return str.charAt(0) + strlen
    }if(str.charAt(1) === "b"){
        return str.charAt(1) + strlen
    } return strlen
}
console.log(deFront('away'))

