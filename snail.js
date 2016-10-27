// Snail Sort
//
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
//
// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:
//
// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
//
//
//
// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.
//
// NOTE 2: The 0x0 (empty matrix) is represented as [[]]

// My Answer

snail = function(array) {
  var result;
  while (array.length) {
    // if result is false, array.shift will take the first row and assign it to result. If it's true, it will concatenate result with array.shift
    result = (result ? result.concat(array.shift()) : array.shift());
    // loops through each index of array and takes the last index of the current index, taking the right items down the snail trail.
    for (let i = 0; i < array.length; i++){
      result.push(array[i].pop());
    }
    // concatenates a reversed array.pop (or empty array if array in undefined) with result.
    result = result.concat((array.pop() || []).reverse());
    // loops through each index of array and pushes the first index of each index to result.
    for (let i = array.length - 1; i >= 0; i--){
      result.push(array[i].shift());
    }
  }
  return result;
  }

  // Best Practice

  snail = function(array) {
  var result;
  while (array.length) {
    // Steal the first row.
    result = (result ? result.concat(array.shift()) : array.shift());
    // Steal the right items.
    for (var i = 0; i < array.length; i++)
      result.push(array[i].pop());
    // Steal the bottom row.
    result = result.concat((array.pop() || []).reverse());
    // Steal the left items.
    for (var i = array.length - 1; i >= 0; i--)
      result.push(array[i].shift());
  }
  return result;
}
