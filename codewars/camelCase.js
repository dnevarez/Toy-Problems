// Complete the method/function so that it converts dash/underscore delimited 
// words into camel casing. The first word within the output should be
// capitalized only if the original word was capitalized.
//
// Examples:
//
// // returns "theStealthWarrior"
// toCamelCase("the-stealth-warrior")
//
// // returns "TheStealthWarrior"
// toCamelCase("The_Stealth_Warrior")

// My Answer

function toCamelCase(str){
  str = str.split('');
  for (var i = str.length - 1; i >= 0; i--){
  	if (str[i] === '-' || str[i] === '_'){
  		str[i + 1] = str[i + 1].toUpperCase();
  		str.splice(i, 1)
  	}
  }
  return str.join('')
}

// Best Answer

function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}
