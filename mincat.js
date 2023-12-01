// String-1 -- minCat
// Given two strings, append them together (known as "concatenation") and return the result. However, if the strings are different lengths, omit chars from the longer string so it is the same length as the shorter string. So "Hello" and "Hi" yield "loHi". The strings may be any length.

// Examples

// minCat('Hello', 'Hi') → loHi
// minCat('Hello', 'java') → ellojava
// minCat('java', 'Hello') → javaello

function minCat(a, b){
    let blen = b.length
    let alen = a.slice(-blen)
    let a2len = a.length
    let b2len = b.slice(-a2len)
    if(a.length > b.length){
    return alen+b
    }if(b.length > a.length){
    return a+b2len
    }
  }