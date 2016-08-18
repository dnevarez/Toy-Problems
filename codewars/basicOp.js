// Your task is to create a function - basicOp().
//
// The function should take three arguments - operation(string),
// value1(integer), value2(integer). The function should return result of
// integers after applying chosen operation.
//
// Examples:
// Javascript:
// basicOp('+', 4, 7) // Output: 11
// basicOp('-', 15, 18) // Output: -3
// basicOp('*', 5, 5) // Output: 25
// basicOp('/', 49, 7) // Output: 7

// My Answer

function x(x, y, z) {
	if (x === '+') return y + z;
	if (x === '-') return y - z;
	if (x === '*') return y * z;
	if (x === '/') return y / z;
}

// Best Answer

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}

// 2nd Best

function basicOp(o, a, b) {
  return eval(a+o+b);
}

// Note on eval.
// Solves issue in this toy problem, but opens potential issues in actual code.
// See: https://www.nczonline.net/blog/2013/06/25/eval-isnt-evil-just-misunderstood/
