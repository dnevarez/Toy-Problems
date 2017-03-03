// For building the encrypted string:
// Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
// Do this n times!
//
// Examples:
//
// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
// Write two methods:
//
// function encrypt(text, n)
// function decrypt(encryptedText, n)
// For both methods:
// If the input-string is null or empty return exactly this value!
// If n is <= 0 then return the input text.

// My Answer

function encrypt(text, n) {
  if (n <= 0) return text;
  if (text == null) return null;
  if (!text) return '';
  newStr = '';
  otherStr = ''
  while (n > 0) {
      for (let i = 0; i < text.length; i++){
       if ((i + 1) % 2 === 0) {
         newStr += text.charAt(i)
       } else {
         otherStr += text.charAt(i)
       }
      }
      text = newStr + otherStr
      newStr = ''
      otherStr = ''
      n-=1
  }
  return text;
}

function decrypt(text, n) {
  console.log(text)
  if (n <= 0) return text;
  if (text == null) return null;
  if (!text) return '';

  decrypted = []
  while (n > 0) {
  x = 0;
  y = 1;
  for(let i = 0; i < text.length; i++){
    if(i >= Math.floor(text.length / 2)){
      decrypted[x] = text[i]
      x+=2
    } else {
      decrypted[y] = text[i]
      y+= 2
    }
  }
  n-=1;
  text = decrypted.join('');
  decrypted = []
  }
  return text;
}

// Best Answer

function encrypt(text, n) {
  for (let i = 0; i < n; i++) {
    text = text && text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1')
  }
  return text
}

function decrypt(text, n) {
  let l = text && text.length / 2 | 0
  for (let i = 0; i < n; i++) {
    text = text.slice(l).replace(/./g, (_, i) => _ + (i < l ? text[i] : ''))
  }
  return text
}
