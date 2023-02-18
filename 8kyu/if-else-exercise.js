//exercise from DP
//https://codepen.io/jsph-lm/pen/yLxNjoN?editors=0011

//My Solutions

function formatTime(totalTime) {
    // write code here
    const minute = Math.floor(totalTime/60);
    const second = totalTime % 60;
    return console.log(minute + ":" + second); 
  }
  
  formatTime(113); // '1:53'
  
  function isEvenorOdd(num) {
    // write code here
    if (num % 2 == 0) {
      return console.log(num + " is a Even number");
    }
    else {
      return console.log(num + " is a Odd number")
    }
  }
  
  isEvenorOdd(10); //"10 is a Even number"
  isEvenorOdd(19); //"19 is a Odd number"
  
  
  function isValidNumber(num) {
    // write code here
    if (typeof num === 'undefined' || isNaN(num)) {
      return console.log(num + " is not a valid number");
    } else {
      return console.log(num + " is a valid number");
    }
  }
  
  isValidNumber(11); //"11 is a valid number"
  isValidNumber("19"); //"19 is a valid number"
  isValidNumber("xyz"); //"xyz is not a number"
  isValidNumber("17.5"); //"17.5 is a valid number"
  isValidNumber("21F"); //"21F is not a number"
  
  function findLargest(num1, num2) {
    // write code here
    if (num1 === num2)  {
      return console.log(num1 + " is equal to " + num2);
    } else if (num1 > num2) {
      return console.log(num1 + " is the largest number");
    } else {
      return console.log(num2 + " is the largest number");
    }
  }
  
  findLargest(21, 45); //"45 is the largest number"
  findLargest(34, 18); //"34 is the largest number"
  findLargest(41, 41); //"41 is equal to 41"
  
  function findLargestOfThree(num1, num2, num3) {
    // write code here
    if (num1 > num2 && num1 > num3) {
      return console.log(num1 + " is the largest number");
    } else if (num2 > num3) {
      return console.log(num2 + " is the largest number");
    } else {
      return console.log (num3 + " is the largest number");
    }
  }
  
  findLargestOfThree(21, 45, 13); //"45 is the largest number"
  findLargestOfThree(34, 18, 52); //"52 is the largest number"
  findLargestOfThree(64, 11, 11); //"64 is the largest number"
  
  function checkInRange(num, start, end) {
    // write code here
    if ( num > start && num < end) {
      return console.log(num + " is between the range " + start + " and " + end);
    } else {
      return console.log(num + " is outside the range " + start + " and " + end);
    }
    
  }
  
  checkInRange(15, 11, 30); //"15 is between the range 11 and 30"
  // checkInRange(20, 34, 51); //"20 is outside the range 34 and 51"
  
  function evalNumbers(num1, num2, op) {
    // write code here
    if (op === "add") {
      return console.log("Sum of " + num1 + " and " + num2 + " is " + (num1 + num2));
    } else if (op === "subtract") {
      return console.log("Difference of " + num1 + " and " + num2 + " is " + (num1 - num2));
    } else if (op === "multiply") {
      return console.log("Product of " + num1 + " and " + num2 + " is " + (num1 * num2));
    } else if (op === "divide") {
      return console.log("Division of " + num1 + " and " + num2 + " is " + (num1/num2));
    } else if (op === "modulus") {
      return console.log("Modulus of " + num1 + " and " + num2 + " is " + (num1 % num2));
    } else {
      return console.log(op + " is an invalid operation");
    }
  }
  
  evalNumbers(15, 10, "add"); //"Sum of 15 and 10 is 25"
  evalNumbers(20, 8, "subtract"); //"Difference of 20 and 8 is 12"
  evalNumbers(12, 4, "multiply"); //"Product of 12 and 4 is 48"
  evalNumbers(28, 7, "divide"); //"Division of 28 and 7 is 4"
  evalNumbers(22, 3, "modulus"); //"Modulus of 22 and 3 is 1"
  evalNumbers(31, 3, "square"); //"square is an invalid operation"
  
  function checkLeapYear(year) {
    // write code here
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return console.log("Year " + year + " is a leap year");
    } else {
      return console.log("Year " + year + " is not a leap year");
    }
  }
  
  checkLeapYear(2012); //"Year 2012 is a leap year"
  checkLeapYear(1900); //"Year 1900 is not a leap year"
  checkLeapYear(2000); //"Year 2000 is a leap year"
  checkLeapYear(2011); //"Year 2011 is not a leap year"
  checkLeapYear(2100); //"Year 2100 is not a leap year"
  