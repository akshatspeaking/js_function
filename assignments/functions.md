1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.

```js
function calculateDogAge(age, converter = 7) {
  let newAge = (age * 7);
  alert("Your doggie is " + newAge + " years old in dog years!")
}
```
2. 🎖Write a function named calculateSupply that:
  * [ ] takes 2 arguments: age, amount per day.
  * [ ] calculates the amount consumed for rest of the life (based on a constant max age).
  * [ ] outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
  * [ ] Accept floating point values for amount per day, and round the result to a round number.

```js
function calculateSupply(age, amount) {
  const MAX = 80;
  let annualAmt = 365 * Math.round(amount);
  let yrs = MAX - age;
  let ans = annualAmt * yrs;
  return ("You will need " + ans + " to last until the ripe old age of 80.");
}
```
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Store a celsius temperature into a variable.
  * [ ] Convert it to fahrenheit and output "NN°C is NN°F".
  * [ ] Create a function called fahrenheitToCelsius:
  * [ ] Now store a fahrenheit temperature into a variable.
  * [ ] Convert it to celsius and output "NN°F is NN°C."

```js

function celsiusToFahrenheit(cel) {
  let far = ((9 * cel) / 5) + 32;
  return (cel + "Celsius is " + far +"Farenheit");
}

function fahrenheitToCelsius(far) {
  let cel = (far - 32) * (5 / 9);
  return (far + "Farenheit is " + cel +"Celsius");
}

```
4. 🎖The function below returns true if the parameter age is greater than 18. Otherwise it asks for a confirmation and returns its result:

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Did parents allow you?");
  }
}
```
  4.1 🎖Convert the above function using ternary operator.
  ```js
  function checkAge(age) {
    age > 18 ? true : confirm("Did parents allow you?");
  }
  ```

  4.2 🎖Convert the above function using `||` operator.
  ```js
  // your code goes here
  ```
Will the function work differently if else is removed like below?

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Did parents allow you?");
}

//The output would be different. In case of age < 18, it would work fine, as the function will not enter the if block and directly return the confirm(); However, for age>18, the function will first enter the if block, exectute the code therein, then also execute the following code and display the confirm() even though it is not needed. 
```
Is there any difference in the behavior of these two variants? If there is what is that?




5. 🎖 Write a function pow(x,n) that returns x in power n.

  * [ ] Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
  * [ ] In this task the function should support only natural values of n: integers greater then 1.

```js

function pow(x, n) {
x = Number(prompt("Enter first number"));
y =  Number(prompt("Enter second number"));

if (x < 0 || y < 0 || !(Number.isInteger(x)) || !(Number.isInteger(y))) {
  alert("Please enter only integers greater than 1");
  return;
} else {
let ans = Math.pow(x, y);
alert(ans);
return;
  }
}


// After writing code uncomment to check the answer.
// pow(3, 2); // 9
// pow(3, 3); // 27
// pow(1, 100); // 1
// pow(-31, 2); // "The number below 1 is not allowed"
```

6. 🎖Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n. Return the result accordingly.

```js

function sumOrMul(n) {
  let ans = 0;
  let op = prompt("Please type add or mul to choose operation");
  if (op == "add) {
    for (let i = 1; i <= n; i++) {
      ans +=  i;
    } else if (op == "mul") {
    for (let i = 1; i <= n; i++) {
      ans =  1;
      ans *= i;
    }
  }
  return ans;
}

```
6. 🎖Write a program that asks the user for a number n using prompt and prints the sum of the numbers 1 to n

```js
let n = Number(prompt("enter number"));
let sum = 0;
for (let i = 1; i <=n; i++) {
  sum += n;
}
console.log(sum);
```
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71

```js
let n = Number(prompt("enter number"));
let sum = 0;
for (let i = 1; i <=n; i++) {
  if (n % 5 == 0 || n % 7 == 0) {
  sum += n;
  }
}
console.log(sum);
```

8. 🎖Write a function `min` that takes two arguments and returns their minimum.

```js
function min(a, b) {

  if (Number(a) < Number(b)) {
    return a;
  }
  else return b;
  
}

console.log(min(0, 10));

// → 0
console.log(min(0, -10));
// → -10
```