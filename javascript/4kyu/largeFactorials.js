// In mathematics, the factorial of integer 'n' is written as 'n!'. It is equal
// to the product of n and every integer preceding it.
// For example: 5! = 1 x 2 x 3 x 4 x 5 = 120
//
// Your mission is simple: write a function that takes an integer 'n' and
// returns 'n!'.
//
// You are guaranteed an integer argument. For any values outside the positive
// range, return null, nil or None. For positive numbers a full length number
// is expected for example, return 25! = '15511210043330985984000000' as a String!
//
// Note: 0! is always equal to 1. Negative values should return null;

// My Answer

const factorial = (value) => {
  let result = [1];

  for (let i = 1; i <= value; i++) {

    const multiplyResult = [];

    for (let digitIndex = 0; digitIndex <= Math.log10(i); digitIndex++) {

      const digit = Math.floor((i % Math.pow(10,digitIndex + 1)) / Math.pow(10,digitIndex));

      let carryOver = 0;
      for (let multiplyIndex = 0; multiplyIndex < result.length; multiplyIndex++) {

        const currentValue = multiplyResult[digitIndex + multiplyIndex] || 0;
        const addValue = digit * result[multiplyIndex] + carryOver;
        multiplyResult[digitIndex + multiplyIndex] = currentValue + addValue;

        if (multiplyResult[digitIndex + multiplyIndex] >= 10) {
          carryOver = Math.floor((multiplyResult[digitIndex + multiplyIndex]) / 10);
          multiplyResult[digitIndex + multiplyIndex] = multiplyResult[digitIndex + multiplyIndex] % 10;
        } else {
          carryOver = 0;
        }
      }

      if (carryOver > 0) {
        multiplyResult.push(carryOver);
      }
    }

    result = multiplyResult;
  }

  return result.reverse().join('');
}

// Best Answer

function BigInt(n) {
  this.digits = Array.isArray(n) ? n : n.toString().split('').reverse().map(Number);

  this.mulInt = function(n) {
    var digits = this.digits;
    var result = [];
    var carry = 0;
    for(var i = 0; i < digits.length; i++) {
      var prod = carry + n * digits[i];
      var d = prod % 10;
      carry = (prod - d) / 10;
      result.push(d);
    }
    if (carry > 0)
      result.push.apply(result, carry.toString().split('').reverse().map(Number));
    return new BigInt(result);
  }

  this.toString = function() {
    return this.digits.reverse().join('');
  }
}

function factorial(n) {
  var result = new BigInt(1);
  for(var i = 1; i <= n; i++)
    result = result.mulInt(i);
  return result.toString();
}
