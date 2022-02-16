This is a crash course in JavaScript.

# Basic syntax

To declare a variable called `foo`:

```js
let foo = 5;
```

To declare a function called `sum`, which accepts two parameters and adds them together:

```js
function sum (a, b) {
  return a + b;
}

// or equivalently:

let sum = function (a, b) {
  return a + b;
}
```

To call the function `sum` with 3 and 5:

```js
sum(3, 5); // 8
```

To print something to the console, use the built-in `console.log` function:

```js
console.log('test');
console.log('result ' + variable);
```

Strings can be either single-quoted or double-quoted.

```js
let string1 = "This is a string.";
let string2 = 'This is also a string';
```

# Objects

An *object* is a collection of key-value pairs, without any particular ordering.

Objects are created like this:

```js
let exampleObject = {key1: 'value1', key2: 'value2'};
```

The keys have to be strings<sup>*</sup>, but the values don't:

```js
let myObject = { key1: 1, key2: 2 };
```

In the example above, `myObject` has 2 keys (`key1` and `key2`) with corresponding values `1` and `2`.

To access the values of an object, use a dot followed by the key name.

```js
myObject.key2 // 2
```

To set values on an object:

```js
myObject.foo = 5; // Creates a key `foo` on `myObject` with value 5.
```

---

# Arrays

An array is an ordered list of elements. To create an array, separate the elements with commas, and surround the whole thing with square brackets.

```js
let myArray = ['foo', 'bar'];
```

To add an element to an array, use the built-in `push` function.

```js
myArray.push(1);

console.log(myArray); // ['foo', 'bar', 1]
```

To get the element of an array at a given index, use square brackets:

```js
myArray[2] // 1
```

To get the length of an array, use the `.length` property.

```js
myArray.length // 3
```

---

# Conditionals

`if` statements:

```js
if (someCondition) {
  // code
}
```

```js
if (someCondition) {
  // code
} else {
  // other code
}
```

To check whether two values are equal to each other, use triple equals: `===`

```js
if (myVariable === 5) {
  // etc.
}
```

`switch`

```js
switch(variable) {
  case 1:
    // code
    break;
  case 2:
    // code
    break;
  default:
    // code
}
```

---

# Loops

`for`

```js
for (let i = 0; i < 4; i++) {
  // code
}
```

`forEach`

```js
array.forEach(function (element) {
    // code
})
```

`while`

```js
while (someCondition) {
  // code
}
```

---

# Modules

To export code for use in another file, use the built-in `module.exports` object.

```js
// e.g. in a file called myModule.js:

module.exports = {foo: 5, bar: 7};
```

Then to import the code from a different file, use the built-in `require` function with the module's filepath.

```js
// in another file
const myImportedModule = require('./myModule.js');
console.log(myImportedModule); // logs {foo: 5, bar: 7}
console.log(myImportedModule.foo); // logs 5
```

---

# High order functions:

`filter`

Syntax:

```js
const newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
```

Returns a new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.

```js
const numbers = [1, 2, 3, 4];

const result = numbers.filter(function (number) { return number > 2 });

console.log(result);// [3, 4]
```

`map`

Syntax:

```js
const new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
}[, thisArg])
```

Returns a new array with each element being the result of the callback function.

```js
const array1 = [1, 2, 3, 4];

const map1 = array1.map(function (x) { return x * 2 });

console.log(map1);// [2, 4, 6, 8]
```

`reduce`

Syntax:

```js
const new_array = arr.reduce(function callback(accumulator[, currentValue[, currentIndex[, array]]]) {
    // code
}[, initialValue])
```

Returns the value that results from the reduction.

```js
const sum = [0, 1, 2, 3].reduce(function (acc, current) {
  return acc + current;
}, 0);

console.log(sum);// 6
```

---

# Miscellaneous syntax:

This is syntax that you don't really need to have in order to write basic JavaScript, but can be helpful to know if you're reading someone else's code.

```js
var, const
```

`var` and `const` are alternate ways of declaring variables. There are a few differences, but for the most part they're the same as `let`.

---

`arrow functions`

Arrow functions are an alternative way of defining functions.

Basically, the following statements are almost equivalent:

```js
let myFunction = function (param1, param2) {
  // code goes here
}

// ---

let myFunction = (param1, param2) => {
  // code goes here
}
```

---