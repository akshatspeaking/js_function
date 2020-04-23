# Expression vs Statement

## Write down if the code is valid or not with reason.

1. What is the output or error of the code below.

```js
function add(var a = 0,var b = 0){
  return a + b;
}
add(21, 23);

//Error: Missing Formal Parameter
//Reason: We must not declare a variable where the parameter should be. Parameters are like placeholder variables, where values will be fed in later. Even if we need to give a default value, we must not use the var or let keywords.
```

2. What is the output or error of the code below.

```js
function add(a = 0; b = 0) {
  return a + b;
}
add(21, 23);

//Error: Missing ) after formal parameter.
//Reaon: semicolon after the first parameter signals the end of the statement, so the browser looks for the ), but does not find it.
```

3. What is the output or error of the code below.

```js
function add(a = 0, b = 0) {
  return a + b;
}
add(21, 23);

//No error. Function works fine.
```

4. What is the output or error of the code below.

```js
function add(a = 0, b) {
  return a + b;
}
add(21);

//Output: NaN
//Reason: the function is taking 21 as the value for parameter a, while b is undefined. Adding a number (21) with an undefined parameter is yielding NaN as the output.
```

5. What is the output or error of the code below.

```js
function add(a = 0, b = 0) {
  return a + b;
}
add(undefined, 21);

//Output: 21
//Reason: giving the function an undefined parameter is making the function fall back to the default value set above, which is 0. The operation is thus handled as normal mathematical operation, with 21+0=21.
```

6. What is the output or error of the code below.

```js
function knowWhy(value) {
  return if(value === 21){
    return "Yes"
  } else {
    return "No"
  }
}
knowWhy(211);

//Error: expected expression, got keyword 'if'
//Reason: return is written in the wrong place. We are returning values inside the if else statements. Return can not be applied to a condition.
```

7. What is the output or error of the code below.

```js
function knowWhy(value) {
  return if(value === 21){
    return "Yes"
  } else {
    return "No"
  }
}
knowWhy(21);

//Error: expected expression, got keyword 'if'
//Reason: Same as above. Return is written in the wrong place. We are returning values inside the if else statements. Return can not be applied to a condition.
```

8. What is the output or error of the code below.

```js
function isItIf(ifElse) {
  return ifElse;
}
isItIf(if(true){console.log('Testing')});

//Error: expected expression, got keyword 'if'
//Reason: we can not have an if statement as the parameter to a function.
```
