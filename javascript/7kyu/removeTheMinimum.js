// The museum of incredible dull things
//
// The museum of incredible dull things wants to get rid of some exhibitions.
// Miriam, the interior architect, comes up with a plan to remove the most boring
// exhibitions. She gives them a rating, and then removes the one with the lowest
// rating.
//
// However, just as she finished rating all exhibitions, she's off to an
// important fair, so she asks you to write a program that tells her the
// ratings of the items after one removed the lowest one. Fair enough.
//
// Task
//
// Given an array of integers, remove the smallest value. If there are multiple
// elements with the same value, remove the one with a lower index. If you get an
// empty array/list, return an empty array/list.
//
// Don't change the order of the elements that are left.
//
// Examples
//
// removeSmallest([1,2,3,4,5]) = [2,3,4,5]
// removeSmallest([5,3,2,1,4]) = [5,3,2,4]
// removeSmallest([2,2,1,2,1]) = [2,2,2,1]

// My Answer

function removeSmallest(numbers) {
  numbers.splice(numbers.indexOf(Math.min.apply(Math, numbers)), 1);
  return numbers
}

// Best Answer


function removeSmallest(numbers) {
  if(!numbers)return [];
  var min=Math.min.apply(null,numbers);
  numbers.splice(numbers.indexOf(min),1);
  return numbers;
}
