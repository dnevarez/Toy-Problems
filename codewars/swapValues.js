// I would like to be able to pass an array with two elements to my swapValues
// function to swap the values. However it appears that the values aren't changing.
//
// Can you figure out what's wrong here?


// My Answer

function swapValues() {
    var args = Array.prototype.slice.call(arguments);
    var temp = args[0][0];
    args[0][0] = args[0][1]; // I changed
    args[0][1] = temp;       // these two lines by adding additional [index]. Rest was provided.
}

// Best Answer

function swapValues() {
  return arguments[0].reverse();
}
