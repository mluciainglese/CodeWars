// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Solution

function digitize(n) {
    let toArray = Array.from(String(n), Number).reverse()
    return toArray
  }