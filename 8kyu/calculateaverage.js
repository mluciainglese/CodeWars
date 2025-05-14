// Write a function which calculates the average of the numbers in a given array. Note: Empty arrays should return 0.

// Solution

function findAverage(array) {
    if (array.length !==0){
      return array.reduce((a, b) => a + b, 0) / array.length
    } else {
      return 0
    }
  }