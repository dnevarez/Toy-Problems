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
  //SETUP
  let result = [1]; //result array base 10

  //COMPUTE
  for (let i = 1; i <= value; i++) {

    //SETUP THE ARRAY TO STORE THE MULTIPLICATION RESULT
    const multiplyResult = [];

    //LOOP THROUGH DIGITS IN i VALUE
    for (let digitIndex = 0; digitIndex <= Math.log10(i); digitIndex++) {

      //GET THE DIGIT, STARTING WITH LOWEST POWER OF 10
      const digit = Math.floor((i % Math.pow(10,digitIndex + 1)) / Math.pow(10,digitIndex));

      //MULTIPLY THAT DIGIT WITH THE RESULT
      let carryOver = 0;
      for (let multiplyIndex = 0; multiplyIndex < result.length; multiplyIndex++) {

        //MULTIPLY THE DIGIT BY THE RESULT AND ADD ONTO THE MULTIPLY RESULT ARRAY
        const currentValue = multiplyResult[digitIndex + multiplyIndex] || 0;
        const addValue = digit * result[multiplyIndex] + carryOver;
        multiplyResult[digitIndex + multiplyIndex] = currentValue + addValue;

        //GET CARRY OVER FOR NEXT i
        if (multiplyResult[digitIndex + multiplyIndex] >= 10) {
          carryOver = Math.floor((multiplyResult[digitIndex + multiplyIndex]) / 10);
          multiplyResult[digitIndex + multiplyIndex] = multiplyResult[digitIndex + multiplyIndex] % 10;
        } else {
          carryOver = 0;
        }
      }

      //IF CARRY OVER DEFINED, ADD TO END OF ARRAY
      if (carryOver > 0) {
        multiplyResult.push(carryOver);
      }
    }

    //ASSIGN THE MULTIPLICATION RESULT TO THE RESULT ARRAY
    result = multiplyResult;
  }

  //OUTPUT
  return result.reverse().join('');
}


// Best Answer

function factorial(n) {
  var res = [1];
  for (var i = 2; i <= n; ++i) {
    var c = 0;
    for (var j = 0; j < res.length || c !== 0; ++j) {
      c += (res[j] || 0) * i;
      res[j] = c % 10;
      c = Math.floor(c / 10);
    }
  }
  return res.reverse().join("");
}
