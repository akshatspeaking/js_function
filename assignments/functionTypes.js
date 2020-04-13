// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End






/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

 //Function Decleration
function addOne(n) {
  return n+1;
}

// Function Expression
let addOne = function(n) {
  return n+1;
};

// Arrow Function
let addOne = n => n+1;

// Arrow Function With Curly Bracket

let addOne = n => {
  return n+1;
};

// Function Invocation

addOne(21); // "22"






/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

 //Function Decleration
 function subOne(n) {
  return n-1;
}

// Function Expression
let subOne = function(n) {
  return n-1;
};

// Arrow Function
let subOne = n => n-1;

// Arrow Function With Curly Bracket

let subOne = n => {
  return n-1;
};

// Function Invocation

subOne(21); // "20"




 /**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

 //Function Decleration
 function add(x, y) {
  return x+y;
}

// Function Expression
let add = function(x, y) {
  return x+y;
};

// Arrow Function
let add = x, y => x+y;

// Arrow Function With Curly Bracket

let add = x, y => {
  return x+y;
};

// Function Invocation

add(21, 22); // "43"




 /**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

 //Function Decleration
 function sub(x, y) {
  return x-y;
}

// Function Expression
let sub = function(x, y) {
  return x-y;
};

// Arrow Function
let sub = x, y => x-y;

// Arrow Function With Curly Bracket

let sub = x, y => {
  return x-y;
};

// Function Invocation

sub(23, 22); // "1"




 /**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

 //Function Decleration
 function mul(x, y) {
  return x*y;
}

// Function Expression
let mul = function(x, y) {
  return x*y;
};

// Arrow Function
let mul = x, y => x*y;

// Arrow Function With Curly Bracket

let mul = x, y => {
  return x*y;
};

// Function Invocation

mul(2, 3); // "6"




 /**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

 //Function Decleration
 function div(x, y) {
  return x/y;
}

// Function Expression
let div = function(x, y) {
  return x/y;
};

// Arrow Function
let div = x, y => x/y;

// Arrow Function With Curly Bracket

let div = x, y => {
  return x/y;
};

// Function Invocation

div(4, 2); // "2"




 /**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

 //Function Decleration
 function sqr(x) {
  return x*x;
}

// Function Expression
let sqr = function(x) {
  return x*x;
};

// Arrow Function
let sqr = x => x*x;

// Arrow Function With Curly Bracket

let sqr = x => {
  return x*x;
};

// Function Invocation

sqr(3); // "9"




 /**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

 //Function Decleration
 function op(operator, x, y) {
  let ans;
   if (operator == "add") {
     ans = x + y;
   } else if ( operator == "subtract") {
     ans = x - y;
   } else if ( operator == "multiply") {
     ans = x * y;
   } else if ( operator == "divide") {
     ans = x / y;
   }
   
  
  return ans;
}



// Function Expression
let op = function(operation, x, y) {
  let ans;
   if (operator == "add") {
     ans = x + y;
   } else if ( operator == "subtract") {
     ans = x - y;
   } else if ( operator == "multiply") {
     ans = x * y;
   } else if ( operator == "divide") {
     ans = x / y;
   } 
  return ans;
};

// Arrow Function
Not Working

// Arrow Function With Curly Bracket

let op = (operation , x , y) => {
  let ans;
  if (operator == "add") {
    ans = x + y;
  } else if ( operator == "subtract") {
    ans = x - y;
  } else if ( operator == "multiply") {
    ans = x * y;
  } else if ( operator == "divide") {
    ans = x / y;
  }
 return ans;
}

// Function Invocation

op("add", 3, 6); // "9"




 /**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

//Function Decleration
function check(a, b) {
 return Number(a) > Number(b) ? true : false;
}

// Function Expression
let ans = function(a, b) {
  return Number(a) > Number(b) ? true : false;
};

// Arrow Function
let check = (a, b) => Number(a) > Number(b) ? true : false;

// Arrow Function With Curly Bracket

let check = (a, b) => {
  return Number(a) > Number(b) ? true : false;
}


// Function Invocation

check(2, 3); // "false"





 /**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

//Function Decleration
function check(a, b) {
  return Number(a) < Number(b) ? true : false;
 }
 
 // Function Expression
 let ans = function(a, b) {
   return Number(a) < Number(b) ? true : false;
 };
 
 // Arrow Function
 let check = (a, b) => Number(a) < Number(b) ? true : false;
 
 // Arrow Function With Curly Bracket
 
 let check = (a, b) => {
   return Number(a) < Number(b) ? true : false;
 }
 
 
 // Function Invocation
 
 check(2, 3); // "true"
 




 /**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

//Function Decleration
function check(a, b) {
  return Number(a) == Number(b) ? true : false;
 }
 
 // Function Expression
 let ans = function(a, b) {
   return Number(a) == Number(b) ? true : false;
 };
 
 // Arrow Function
 let check = (a, b) => Number(a) == Number(b) ? true : false;
 
 // Arrow Function With Curly Bracket
 
 let check = (a, b) => {
   return Number(a) == Number(b) ? true : false;
 }
 
 
 // Function Invocation
 
 check(2, 3); // "false"
 




 /**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

//Function Decleration
function min(a, b) {
  return Math.min(a, b);
 }
 
 // Function Expression
 let ans = function(a, b) {
  return Math.min(a, b);
 };
 
 // Arrow Function
 let min = (a, b) => return Math.min(a, b);
 
 // Arrow Function With Curly Bracket
 
 let check = (a, b) => {
  return Math.min(a, b);
 }
 
 
 // Function Invocation
 
 min(2, 3); // "2"
 




 /**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */


//Function Decleration
function max(a, b) {
  return Math.max(a, b);
 }
 
 // Function Expression
 let ans = function(a, b) {
  return Math.max(a, b);
 };
 
 // Arrow Function
 let max = (a, b) => return Math.max(a, b);
 
 // Arrow Function With Curly Bracket
 
 let check = (a, b) => {
  return Math.max(a, b);
 }
 
 
 // Function Invocation
 
 max(2, 3); // "3"



 /**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

//Function Decleration
function checkEven(n) {
  n % 2 == 0 ? true : false;
}

// Function Expression
let checkEven = function(n) {
  n % 2 == 0 ? true : false;
};

// Arrow Function
let checkEven = n => n % 2 == 0 ? true : false;

// Arrow Function With Curly Bracket

let checkEven = n => {
  n % 2 == 0 ? true : false;
}

// Function Invocation

checkEven(21); // "false"




 /**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

//Function Decleration
function checkOdd(n) {
  n % 2 == 0 ? false : true;
}

// Function Expression
let checkOdd = function(n) {
  n % 2 == 0 ? false : true;
};

// Arrow Function
let checkOdd = n => n % 2 == 0 ? false : true;

// Arrow Function With Curly Bracket

let checkOdd = n => {
  n % 2 == 0 ? false : true;
}

// Function Invocation

checkOdd(21); // "false"




 /**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */






 /**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

 //Function Decleration
function add(word1, word2) {
  return String(a) + " " + String(b);
}

// Function Expression
let add = function(word1, word2) {
  return String(a) + " " + String(b);
};

// Arrow Function
let add = (word1, word2) => return String(a) + " " + String(b);
)
// Arrow Function With Curly Bracket

let add = (word1, word2) => {
  return String(a) + " " + String(b);
}

// Function Invocation

add(Hi, Hello); // "Hi Hello"