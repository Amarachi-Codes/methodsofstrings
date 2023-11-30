// String-1 -- conCat
// Given two strings, append them together (known as "concatenation") and return the result. However, if the concatenation creates a double-char, then omit one of the chars, so "abc" and "cat" yields "abcat".

// Examples

// conCat('abc', 'cat') → abcat
// conCat('dog', 'cat') → dogcat
// conCat('abc', '') → 

function conCat(a, b){
    if(a.length-1 === b.charAt(0)){
       let cutoff = b.slice(0)
    return cutoff 
  }
//    return a.concat(b) 
  }console.log(conCat('abc', 'cat'));