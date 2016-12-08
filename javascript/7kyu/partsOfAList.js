// Write a function partlist that gives all the ways to divide a list (an array)
// of at least two elements in two non-empty parts.
//
// Each two non empty parts will be in a pair (or an array for languages without tuples)
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.
// Example:
//
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
//
// [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"],
// ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]
//
// or
//
// a = {"az", "toto", "picaro", "zone", "kiwi"} -->
//
// {{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"},
// {"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}
//
// or
//
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
//
// [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"),
// ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]

// My Answer

function partlist(arr) {
	var newArr =[]
    for(var i = 1; i < arr.length; i++){
    	newArr.push([arr.slice(0, i).join(' '), arr.slice(i, arr.length).join(' ')])
    }
    return newArr
}

// Best Answer

var partlist=a=>a.map((v,i)=>[a.slice(0,i).join(' '),a.slice(i).join(' ')]).slice(1)
