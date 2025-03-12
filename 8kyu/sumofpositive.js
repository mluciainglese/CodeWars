/* Task
You get an array of numbers, return the sum of all of the positives ones.

Example
[1, -4, 7, 12] => 1 + 7 + 12 = 20

Note
If there is nothing to sum, the sum is default to 0. */

// Solution

function positiveSum(arr) {
    let positiveNum = []
    for (let i = 0; i < arr.length; i++){
      if (arr[i] > 0) {
        positiveNum.push(arr[i])  
      }
    }
    return positiveNum.reduce((a, b) => a + b, 0);
  }