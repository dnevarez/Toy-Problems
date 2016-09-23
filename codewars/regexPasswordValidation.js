// You need to write regex that will validate a password to make sure it meets the follwing criteria:
//
// At least six characters long
// -contains a lowercase letter
// -contains an uppercase letter
// -contains a number
//
// Valid passwords will only be alphanumeric characters.

// My answer

function validate(password) {
console.log(password)
  return /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))[^\W]{6,}$/.test(password);
}

// Best Answer
function validate(password) {
  return  /^[A-Za-z0-9]{6,}$/.test(password) &&
          /[A-Z]+/           .test(password) &&
          /[a-z]+/           .test(password) &&
          /[0-9]+/           .test(password) ;
}

function validate(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
}
