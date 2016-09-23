// Given a string, you have to return a string in which each character
// (case-sensitive) is repeated once.
//
// doubleChar("String") ==> "SSttrriinngg"
//
// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"
//
// doubleChar("1234!_ ") ==> "11223344!!__  "

//My Answer

function doubleChar(str) {
  str = str.split('')
  for(let i = str.length - 1; i >= 0; i--){
    str.splice(i, 0, str[i])
  }
  return str.join('')
}

// Best Answer 

const doubleChar = (str) => str.split("").map(c => c + c).join("");
