// Create a function that takes in 3 arguments. A string (text), and number (max)
// for the maximum character count, and a boolean (spaces), indicating whether or
// not spaces are counted in the total of the string length.
//
// Return an array. The first item should be a boolean, indicating whether or not
// string length falls within the max character count. The second should be the string.
//
// If the text argument is longer than the max character count. The returned string
// should show the text up to where the max character count cuts off. The result
// vary based on whether spaces is true or false.
//
// If the text argument is equal to or less than the max character count. The entire
// text will be returned as the second item in the array.

// My Answer
function charCheck(text, max, spaces){
  let textLength = 0
  if (max === 0) return [false, ''];
  if (spaces === true) {
    textLength = text.length;
    if (textLength > max) {
      return [false, text.substr(0, max)]
    } else {
      return [true, text]
    }
  } else {
      ntext = text.split(' ').join('')
      textLength = ntext.length;
        if (textLength > max) {
          return [false, ntext.substr(0, max)]
        } else {
            return [true, ntext]
        }
  }
};


// Best Answer

function charCheck(text, max, spaces){
  text = spaces ? text : text.replace(/ /g, '');
  return [text.length <= max, text.substring(0, max)]
};

// Second Best

function charCheck(text, max, spaces) {
  if (!spaces)
    text = text.replace(/\s/g, '');
  return [text.length <= max, text.slice(0, max)];
}
