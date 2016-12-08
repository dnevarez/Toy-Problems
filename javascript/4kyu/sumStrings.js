// Given the string representations of two integers, return the string
// representation of the sum of those integers.
//
// For example:
//
// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the
// ten numerals "0" to "9".

// My Answer

function sumStrings(a,b) {
  a = a || '0';
  b = b || '0';

  var aParts = a.split('').reverse(),
      bParts = b.split('').reverse(),
      sumParts = [],
      longest = Math.max(aParts.length, bParts.length);

  for (var i = 0; i < longest; i++) {
    var temp = 0;

    if(typeof aParts[i] != 'undefined')
      temp += +aParts[i];

    if(typeof bParts[i] != 'undefined')
      temp += +bParts[i];

    sumParts.push(temp);
  }

  sumParts.forEach(function(part, index) {
    part = part + '';

    if(part.length > 1) {
      sumParts[index] = part[1];

      if (index == sumParts.length - 1) {
        sumParts.push(part[0]);
      } else {
        sumParts[index + 1] = 1 * sumParts[index + 1] +  1 * part[0] ;
      }
    }
  });

  var ret = '';
  sumParts.forEach(function (value) {
    ret = value + ret;
  });

  ret = ret.replace(/^0+/, '');

  return ret;
}

// Best Answer

String.prototype.reverse = function() {
  return this.split('').reverse().join('');
}

function sumStrings(a,b) {
  a = a.reverse(); b = b.reverse();
  var carry = 0;
  var index = 0;
  var sumDigits = [];
  while (index < a.length || index < b.length || carry != 0) {
    var aDigit = index < a.length ? parseInt(a[index]) : 0;
    var bDigit = index < b.length ? parseInt(b[index]) : 0;
    var digitSum = aDigit + bDigit + carry;
    sumDigits.push((digitSum % 10).toString());
    carry = Math.floor(digitSum / 10);
    index++;
  }
  sumDigits.reverse();
  while (sumDigits[0] == '0') sumDigits.shift();
  return sumDigits.join('');
}
