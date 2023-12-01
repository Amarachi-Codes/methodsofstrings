// String-1 -- conCat
// Given two strings, append them together (known as "concatenation") and return the result. However, if the concatenation creates a double-char, then omit one of the chars, so "abc" and "cat" yields "abcat".

// Examples

// conCat('abc', 'cat') → abcat
// conCat('dog', 'cat') → dogcat
// conCat('abc', '') → 

function conCat(a, b){
  if(a[a.length-1] === b.charAt(0)){
     let cutoff = b.slice(1,b.length)
     return a.concat(cutoff)
}if(a[a.length-1] != b.charAt(0)){
  return a+ b
}

}
  console.log(conCat('abcd', 'cat'));


  //getting my fundamentals right
  
  // let me = "doris"
  // console.log(me[me.length-1]);
  
  // let firstname = "cat";
  // console.log(typeof(firstname))

  // console.log(firstname.slice(1,firstname.length));
