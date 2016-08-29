// Complete the solution so that it reverses all of the words within
// the string passed in.
//
// Example:
//
// reverseWords("The greatest victory is that which requires no battle")
// // should return "battle no requires which that is victory greatest The"


// My Answer

function reverseWords(str){
  return str.split(" ").reverse().join(" ");
}

// Best Answer

function reverseWords(str){
  return str.split(" ").reverse().join(" ");
}

const reverseWords = (str) => str.split(" ").reverse().join(" ");