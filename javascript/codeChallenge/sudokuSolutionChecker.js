// Create a function that will check a sudoku solution and return whether the solution
// if correct (true) or false (false).


// The following function checks solutions presented as either a string of numbers
// or a properly formatted nested array.

// More checks should be added.

function sudokuSolutionChecker(answer){

  var rows = [], cols = [], grid = [];

  // If answer is a string, check length and characters. Convert to nested array.
  if(typeof answer === 'string') {

  // check that all spaces are filled. 81 characters.

    var length = answer.split(',').length,
        ansArr = answer.split(',');
    if (length > 81 || length < 81) return false;

    // check characters are all valid.

    if(!new RegExp("^[1-9,]+$").test(answer)) return false;

      // Build array from answer
      while (ansArr.length > 0){
        rows.push(ansArr.splice(0, 9))
      }

      // Convert arrays of strings to arrays of numbers
      rows = rows.map(x=>{
        return x.map( y =>{
          return parseInt(y);
          })
      });

  } else {
    rows = answer
  }

  //place in proper order. 9 across, 9 down.

  //prefill arrays with nine empty arrays
  for (var i = 0; i < 9; i++) {
          cols.push([]);
          grid.push([]);
      }

  //fill empty arrays in cols and grid arrays with corresponding data
  for (row = 0; row < 9; row++){

    for (col = 0; col < 9; col++){

      //fill cols and check values are valid
      if (rows[row][col] > 9 || rows[row][col] < 1) return false;

      cols[col][row] = rows[row][col];

      //figure out how to add grid data
      gridRow = Math.floor( row / 3 );
      gridCol = Math.floor( col / 3 );
      gridIndex = gridRow * 3 + gridCol;

      // fill grid with proper data
      grid[gridIndex].push(rows[row][col]);
    }
  }

  // console.log(rows, cols, grid)
  // check 9 accross does not have duplicates.
  // check 9 down does not have duplicates.
  // check each box of 9 (3x3), does not have duplicates.

  function dupes(myArray) {
      return (myArray.length === 9 && myArray.length === new Set(myArray).size)
    }


  var rowAnswer =  rows.every(x=>{return dupes(x)}),
      colsAnswer = cols.every(x=>{return dupes(x)})
      gridAnswer = grid.every(x=>{return dupes(x)})

      console.log(rowAnswer, colsAnswer, gridAnswer)



      return (rowAnswer && colsAnswer && gridAnswer)

}


// Dummy data for testing purposes.

var sudoku_data_false = "1,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9,1,3,4,5,6,7,8,9,1,2,4,5,6,7,8,9,1,2,3,5,6,7,8,9,1,2,3,4,6,7,8,9,1,2,3,4,5,7,8,9,1,2,3,4,5,6,8,9,1,2,3,4,5,6,7,9,1,2,3,4,5,6,7,8"

var sudoku_data_true = [
    [5,3,4,6,7,8,9,1,2],
    [6,7,2,1,9,5,3,4,8],
    [1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],
    [4,2,6,8,5,3,7,9,1],
    [7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [3,4,5,2,8,6,1,7,9]
];
