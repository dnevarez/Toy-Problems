// ROT13 is a simple letter substitution cipher that replaces a letter with the
// letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar
// cipher.
//
// Create a function that takes a string and returns the string ciphered with
// Rot13. If there are numbers or special characters included in the string,
// they should be returned as they are. Only letters from the latin/english
// alphabet should be shifted, like in the original Rot13 "implementation".
//
// Please note that using "encode" in Python is considered cheating.

// My Answer

function rot13(message){
  var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  return message.split('').map((x) => { if(alpha.indexOf(x.toLowerCase()) !== -1){
 	  if(x === x.toLowerCase()){
    	x = alpha[alpha.indexOf(x.toLowerCase()) + 13];
    	return x;
   	}
   	else if (x === x.toUpperCase()){
   		  	x = alpha[alpha.indexOf(x.toLowerCase()) + 13];
    	return x.toUpperCase();
   	}
  }
  	else return x
  }).join('');
}

// Best Answer

function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}
