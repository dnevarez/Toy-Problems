// Consider a staircase of size n = 4:
//
//      #
//     ##
//    ###
//   ####
//
// Observe that its base and height are both equal to n, and the image is drawn
// using # symbols and spaces. The last line is not preceded by any spaces.

// The staircase is right-aligned.

// Write a function that takes in one parameter n and prints a staircase.

function staircase(n){
    var stairs = '', step, line = 1;

    // create seperate lines
    while(line <= n){
      // reset step to start anew
      step='';
        // create each 'step'. Each step in n chars long. with # line number of times.
        for(i = 1; i <= n; i++){
          if(i > n - line){
            step+='#';
          } else {
            step+=' ';
          }
        }
        // add step, followed by return
        stairs+=step
        // add line break if needed and increment line.
        if(line>n) break;
        stairs+='\n'
        line++;
    }
    // return stairs;
    console.log(stairs)
}
