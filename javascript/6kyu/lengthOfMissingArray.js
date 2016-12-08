// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their
// length-values are consecutive.
// But one array is missing!
//
//
// You have to write a method, that return the length of the missing array.
//
// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3
//
//
// If the array of arrays is null/nil or empty, return 0.
//
// When an array in the array is null or empty, return 0 too!
// There will always be a missing element and its length will be always between
// the given arrays.
//
// Have fun coding it and please don't forget to vote and rank this kata! :-)

// My Answer

function getLengthOfMissingArray(arrayOfArrays) {
	if(arrayOfArrays){
	if (arrayOfArrays.length === 0 ) return 0;
	var length = []
   	arrayOfArrays.forEach(function(x){
	   	if(x) length.push(x.length)
	   	return 0;
   })
   if (length.indexOf(0) === -1) {
	  for(var i = Math.min(...length); i < Math.max(...length); i++){
	   	if (length.indexOf(i) === -1) return i;
	     }
	   }
	}
   	return 0
}

// Best Answer

function getLengthOfMissingArray(arr) {
  return !arr||(ar=arr.map((x,i)=>x?x.length:0).sort((a,b)=>a-b)).indexOf(0)>-1
         ?0:ar.filter((x,i)=>x!=i+ar[0]).concat([1])[0]-1
}
