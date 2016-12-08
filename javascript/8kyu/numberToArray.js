// Convert number to reversed array of digits
// 348597 => [7,9,5,8,4,3]

// My Answer

function digitize(n) {
 return n.toString().split('').map(function(x){return parseInt(x)}).reverse()
}

// Best

function digitize(n){
  return (n + '').split('').map(Number).reverse();
}
