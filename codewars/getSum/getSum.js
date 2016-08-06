// My solution.

var getSum = (a, b) => {
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


// Best solution

const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}

// Second Best

function GetSum( a,b )
{
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
   else return a + GetSum(a-1,b);
}
