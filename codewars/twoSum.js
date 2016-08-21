// Write a function that takes an array of numbers (integers for the tests) and
// a target number. It should find two different items in the array that, when
// added together, give the target value. The indices of these items should then
// be returned in an array like so: [index1, index2].
//
// For the purposes of this kata, some tests may have multiple answers; any valid
// solutions will be accepted.
//
// The input will always be valid (numbers will be an array of length 2 or greater,
// and all of the items will be numbers; target will always be the sum of two
// different items from that array).
//
// Based on: http://oj.leetcode.com/problems/two-sum/

// My Answer

function twoSum(numArr, target) {
	var result = [];
	for (let i = 0; i < numArr.length; i++) {
		for (let j = 0; j < numArr.length; j++) {
			if (i !== j && numArr[i] + numArr[j] === target) {
				result.push(i, j)
				return result
			}
		}
	}
}


// Best Answer

function twoSum(numbers, target) {
  var tmp, hash = {};
  numbers.forEach(function(a, i){ hash[a] = i; })

  for (var i = 0; i < numbers.length; i++){
    tmp = target - numbers[i];
    if (typeof hash[tmp] !== 'undefined') return [i, hash[tmp]]
  }
}


function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length-1; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}
