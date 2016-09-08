function sumStrings(a,b) {
  // input always needs to be set to 0
  a = a || '0';
  b = b || '0';

  // sum each input parts together
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

  // make each block hold only 1 digit by moving the tenth part to the next block
  sumParts.forEach(function(part, index) {
    part = part + '';

    if(part.length > 1) {
      sumParts[index] = part[1];

      // if last element and new block to parts
      if (index == sumParts.length - 1) {
        sumParts.push(part[0]);
      } else {
        sumParts[index + 1] = 1 * sumParts[index + 1] +  1 * part[0] ;
      }
    }
  });

  // join string
  var ret = '';
  sumParts.forEach(function (value) {
    ret = value + ret;
  });

  // remove zeros from the front of string
  ret = ret.replace(/^0+/, '');

  return ret;
}
