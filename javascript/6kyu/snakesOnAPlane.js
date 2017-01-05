// Did you ever see the movie called Snakes on a Plane?
//
// It starred Samuel L. Jackson as the hero and had a complicated plot with (SPOILER) snakes and they were (SPOILER) on a plane.
//
// In this Kata there are also snakes on a plane but now YOU can be the hero.
//
// Task
//
// Count how many snakes are on the plane
//
// If you are correct  everybody lives!
// If you fail,  we all die!
// No pressure!
//
// Start counting NOW...
//
// 1.. 2.. 3.. 4.. hang on didn't you count that one twice? 1.. 2.. dammit stop wriggling
//
// Notes:
//
// snakeskins are uniquely patterned with a single character per snake
// snakes can be any length

// My Answer
function snakesOn(aPlane) {
  var count = 0;
  var uniq = '';
  aPlane.forEach(x => {
    for (var i = 0; i< x.length; i++) {
    let y = uniq.indexOf( x[i] )
     if(y === -1 && x[i] !== '_'){
       uniq += x[i];
       count++
     }
  }
})
  return count
}

// Best Answer
function snakesOn(aPlane) {
  return new Set(aPlane.join("")).size-2;
}
