// Return array of fib numbers in reverse order

// My Answer

function iccanobif(n) {
console.log(n)
  var fib = [1]
  var a = 0, b = 1, c = 1;
  for (let i = 2; i <= n; i++){
    c = a + b;
    a = b;
    b = c;
    fib.push(c);
  }
  return fib.reverse();
}


// Best Practice

function iccanobif(n, acc = [1, 1]) {
  switch (n) {
    case 1: return [1];
    case 2: return acc;
    default: return iccanobif(--n, [acc[1] + acc[0]].concat(acc));
  }
}
