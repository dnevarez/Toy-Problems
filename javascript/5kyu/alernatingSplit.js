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
