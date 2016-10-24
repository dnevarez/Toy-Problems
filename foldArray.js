// In this kata you have to write a method that folds a given array of integers
// by the middle x-times.
//
// An example says more than thousand words:
// Fold 1-times:
// [1,2,3,4,5] -> [6,6,3]
//
// A little visualization (NOT for the algorithm but for the idea of folding):
//
//  Step 1         Step 2        Step 3       Step 4       Step5
//                      5/           5|         5\
//                     4/            4|          4\
// 1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
// ----*----      ----*          ----*        ----*        ----*
//
//
// Fold 2-times:
// [1,2,3,4,5] -> [9,6]


// My Answer

function foldArray(array, runs){
	for(let i = 0; i < runs; i++){
		if(array.length === 2) return [array[0] + array[1]];
  			array = array.map(function(x,i){
  				if(((array.length -1) -i) !== i){
  		  			x = array[array.length -1 -i] + x;
  				}
  				return x;})
  				// if (array.length % 2 !== 0){
  					array.splice(Math.ceil(array.length / 2)).reverse();
  				// }

			}

 return array
}


// Best Practice/Clever

function foldArray(a, n) {
  const r = [], c = a.slice();
  while (c.length) r.push(c.pop() + (c.shift() || 0));
  return n - 1 ? foldArray(r, n - 1) : r;
}
