// Vampire Numbers
//
// Our loose definition of Vampire Numbers can be described as follows:
//
// 6 * 21 = 126
// # 6 and 21 would be valid 'fangs' for a vampire number as the
// # digits 6, 1, and 2 are present in both the product and multiplicands
//
// 10 * 11 = 110
// # 110 is not a vampire number since there are three 1's in the
// # multiplicands, but only two 1's in the product
// Create a function that can receive two 'fangs' and determine if the product of
// the two is a valid vampire number.


// My Answer
var vampire_test = function(a, b){
	let sum = a * b;
	a = a.toString().split('')
	b = b.toString().split('')
	a = a.concat(b);
	sum = sum.toString().split('')
	if (a.length !== sum.length) return false;
	return a.sort().toString() === sum.sort().toString()
}

// Best Answer

function vampire_test(a, b){
  return sortStr(a + '' + b) == sortStr(a * b + '');
}
// The following defines sortStr function.
function sortStr(v){ return v.split('').sort().join('') }


// or

var vampire_test = function(a, b){
  var origDigits = String(a) + String(b),
      prodDigits = String(a * b);

  origDigits = origDigits.split('').sort().join('');
  prodDigits = prodDigits.split('').sort().join('');

  return prodDigits === origDigits ? true : false;
}

// or

var vampire_test = function(a, b){
    return (''+a+b).split('').sort().join() == (a*b+'').split('').sort().join();
}
