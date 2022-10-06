// Ex2.1 - Sum of lowest numbers
// Create a function that returns the sum of the two lowest positive numbers given an array of
// minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

const numbers = [10, 343445353, 3453445, 3453545353453];

function sum2lowest(arr) {
  arr.sort(function compareNumbers(a, b) {
    return a - b;
  });
  return arr[0] + arr[1];
}
console.log(sum2lowest(numbers));

// Ex2.2 - One and Zero - Binary
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
