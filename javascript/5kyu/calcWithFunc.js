// This time we want to write calculations using functions and get the results. Let's have a look at some examples:
//
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:
//
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand

// My Answer

function zero(callback){
  if(callback){
    return eval('0'+callback)
  }
  else{
    return 0
  }
}

function one(callback){
  if(callback){
    return eval('1'+callback)
  }
  else{
    return 1
  }
}

function two(callback){
 if(callback){
    return eval('2'+callback)
  }
  else{
    return 2
  }}

function three(callback){
  if(callback){
        return eval('3'+callback)
  }
  else{
    return 3
  }
}

function four(callback){
  if(callback){
         return eval('4'+callback)
  }
  else{
    return 4
  }
}

function five(callback){
  if(callback){
    return eval('5'+callback)
  }
  else{
    return 5
  }
}

function six(callback){
  if(callback){
    return eval('6'+callback)
  }
  else{
    return 6
  }
}

function seven(callback){
  if(callback){
    return eval('7'+callback)
  }
  else{
    return 7
  }
}

function eight(callback){
  if(callback){
     return eval('8'+callback)
  }
  else{
    return 8
  }
}

function nine(callback){
  if(callback){
     return eval('9'+callback)
  }
  else{
    return 9
  }
}





function plus(callback){
  return '+' + callback;
}
function minus(callback){
  return '-' + callback;
}
function dividedBy(callback){
  return '/' + callback;
}
function times(callback){
  return '*' + callback;
}

// Best Answer

var n = function(digit) {
  return function(op) {
    return op ? op(digit) : digit;
  }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function(l) { return l + r; }; }
function minus(r) { return function(l) { return l - r; }; }
function times(r) { return function(l) { return l * r; }; }
function dividedBy(r) { return function(l) { return l / r; }; }

// Or

function zero(func)   { return func ? func(0) : 0; };
function one(func)    { return func ? func(1) : 1; };
function two(func)    { return func ? func(2) : 2; };
function three(func)  { return func ? func(3) : 3; };
function four(func)   { return func ? func(4) : 4; };
function five(func)   { return func ? func(5) : 5; };
function six(func)    { return func ? func(6) : 6; };
function seven(func)  { return func ? func(7) : 7; };
function eight(func)  { return func ? func(8) : 8; };
function nine(func)   { return func ? func(9) : 9; };

function plus( b )      { return function( a ) { return a + b; }; };
function minus( b )     { return function( a ) { return a - b; }; };
function times( b )     { return function( a ) { return a * b; }; };
function dividedBy( b ) { return function( a ) { return a / b; }; };

// Or

['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
.forEach(function (name, n) {
  this[name] = function (f) { return f ? f(n) : n }
});

function plus(n)      { return function (a) { return a + n } }
function minus(n)     { return function (a) { return a - n } }
function times(n)     { return function (a) { return a * n } }
function dividedBy(n) { return function (a) { return a / n } }
