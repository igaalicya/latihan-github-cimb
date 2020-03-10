
const array = [80, 80, 50]; 

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(array));

function calculateGrade(marks) {
  // write your code here
  let avg = calculateAverage(marks)
  if (avg >= 90) {
        return 'A';
    }
    else if (avg >= 80) {
        return 'B';
    }
    else if (avg >= 70) {
        return 'C';
    }
    else if (avg >= 60) {
        return 'D';
    } else
    return 'F';
}

function calculateAverage(array) {
  // write your code here
  let sum = 0
  for( var i = 0; i < array.length; i++ ){
        sum += parseInt( array[i])
    }

    return sum/array.length
}



/*
Instructions:
Create 2 functions, A and G.
A receives an array of integers as an argument,
calculates the average value of the array, and returns
a grade based on that average value/score.
G receives an integer and returns a grade based on that integer.
Hint:
Call A inside of G
Input: [80, 80, 50]
Output: C
Input: [90, 90, 85, 72]
Output: B
*/