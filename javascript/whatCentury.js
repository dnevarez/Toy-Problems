// Return the inputted numerical year in century format. For example 2014,
// would return 21st.
//
// The input will always be a 4 digit string. So there is no need for year string
// validation
//
// Examples:
// Input: 1999 Output: 20th
// Input: 2011 Output: 21st
// Input: 2154 Output: 22nd
// Input: 2259 Output: 23rd
// Input: 1124 Output: 12th
// Input: 2000 Output: 20th

// My Answer

function whatCentury(year){
	var century;
	year.split('');
	century = ((year[0] + year[1]) * 1 + 1).toString()
	if(year[2] === '0' && year[3] === '0') century = year[0] + year[1];
	if (century === '11' ||century === '12' || century ===  '13') return century + 'th';
	else if (century.charAt(1) === '1') return century + 'st'
	else if (century.charAt(1) === '2') return century + 'nd'
	else if (century.charAt(1) === '3') return century + 'rd'
	 return century + 'th'
}

// Best Answer

function whatCentury(year)
{
  var century = Math.ceil(year/100);
  return century + (century < 20 ? 'th' : ['th', 'st', 'nd', 'rd'][century % 10] || 'th');
}
