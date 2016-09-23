// Return an array of fibonnaci numbers up to the number given. Apply FizzBuzz to array.


// My Answer

function fibsFizzBuzz(n) {
	var arr = [1]
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
        if (f % 3 === 0 && f % 5 === 0){
        	arr.push('FizzBuzz')
        }
        else if (f % 3 === 0){
        	arr.push('Fizz')
        }
        else if (f % 5 === 0){
        	arr.push('Buzz')
        }
        else {
        arr.push(f)
        }
    }
    return arr;
};
