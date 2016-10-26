// Replace all vowels with !.

// My Answer

function replace(s){
	let vowels = ['a','e','i','o','u'];
 	return s.split('').map(x => vowels.indexOf(x.toLowerCase()) !== -1 ? x = '!': x).join('')
}

// Best Practice

function replace(s){
  return s.replace(/[aeoiu]/ig, '!')
}
