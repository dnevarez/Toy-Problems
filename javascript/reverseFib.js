// Return array of fib numbers in reverse order

// My Answer

function iccanobif(n) {
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

// Best Answer

function iccanobif(n) {
  var i = 2,
      fibonacci = [1, 1];

  if (n === 1) {
    return [n];
  }

  while (i < n) {
    fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
    i++;
  }
  return fibonacci.reverse();
}
