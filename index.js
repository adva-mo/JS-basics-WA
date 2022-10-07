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
// console.log(sum2lowest(numbers));

// Ex2.2 - One and Zero - Binary
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

function fromBinary(arr) {
  let counter = 0;
  for (num of arr) {
    counter = 2 * counter + num;
  }
  return counter;
}
// console.log(fromBinary([1, 0, 1, 1]));

// Ex2.3 - Find the Next Perfect Square
// You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square after the one passed
// as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an
//integer. If the parameter is itself not a perfect square then -1 should be returned. You may assume
//the parameter is positive.

function findNextSquare(n) {
  let firstSqar = Math.sqrt(n);
  return Number.isInteger(firstSqar) ? (firstSqar + 1) ** 2 : -1;
}
// console.log(findNextSquare(114));

// Ex2.4 - Unique
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// indUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

function Unique(arr) {
  let firstNum = arr.shift();
  let nextMatch = arr.find((num) => num != firstNum);
  return nextMatch ? nextMatch : firstNum;
}
// console.log(Unique([0, 0, 0.55, 0, 0]));

// Ex2.5 - Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be
// a positive integer greater than 0.
// For example: summation(2) -> 3 1+2
// summation(8) -> 36 1+2+3+4+5+6+7+8

function Summation(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
// console.log(Summation(2));

// Ex2.6 - Years and Centuries
// The first century spans from the year 1 up to and including the year 100,
// The second - from the year 101 up to and including the year 200, etc.
// Task :
// Given a year, return the century it is in.
// Input , Output Examples ::
// centuryFromYear(1705) returns (18)
// centuryFromYear( 1900) returns (19)
// centuryFromYear(1601) returns (17)
// centuryFromYear(2000) returns (20)

function century(year) {
  if (year % 100 == 0) {
    return year / 100;
  } else {
    year = year + "";
    return Number(year[0] + year[1]) + 1;
  }
}
// console.log(century(1900));

// Ex2.7 - Basic Math
// Your task is to create a function that does four basic .
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation. Examples
// bbasicOp('+', 4, 7)  Output: 11
// basicOp('-', 15, 18)  Output: -3
// basicOp('*', 5, 5)  Output: 25
// basicOp('/', 49, 7)  Output: 7

function basicMath(operation, val1, val2) {
  switch (operation) {
    case "+":
      return val1 + val2;
    case "-":
      return val1 - val2;
    case "*":
      return val1 * val2;
    case "/":
      return val1 / val2;
  }
}
// console.log(basicMath("-", 15, 18));

// Ex3.1 - Growth Of population
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly
// increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town.
// How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
// At the end of the first year there will be: 1000 + 1000 * 0.02 + 50 => 1070 inhabitants
// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)
// At the end of the 3rd year there will be: 1141 + 1141 * 0.02 + 50 => 1213

function nb_year(p0, percent, aug, p) {
  let counter = 0;
  percent = percent ? percent / 100 : 0;
  while (p0 <= p) {
    p0 = Math.floor(p0 * percent + p0 + aug);
    counter++;
  }
  return counter;
}
// console.log(nb_year(1500000, 2.5, 10000, 2000000));
