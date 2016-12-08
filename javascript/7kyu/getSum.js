// Description:
//
// Given two integers, which can be positive and negative, find the sum of all the
// numbers between including them too and return it. If both numbers are equal
// return a or b.
//
// Note! a and b are not ordered!
//
// Example:
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

// My Answer

function GetSum( a,b )
{
   	if (a > b) {
		for (let i = b + 1; i <= a; i++) {
			b += i
		}
		return b;
	}
	else if (a === b) return a;
	else {
		for (let i = a + 1; i <= b; i++) {
			a += i
		}
	}
	return a
}

// Best Answer

const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}
