# 1. Conditional

Write a function that is called with a number and add 2 if the number is lower than 5 and add 3 if the number is higher or equal 5

```js
function addNumber(number) {
    if (number < 5) {
        return number + 2;
    } else {
        return number + 3;
    }
}
```

---

# 2. Fizzbuzz

Write a function that is called with a number and print `fizz` if the number is divisible by 3, print `buzz` if the number is divisible by 5 and print `fizzbuzz` if the number is divisible by 3 and 5.

```js
function fizzbuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log('fizzbuzz');
    } else if (number % 3 === 0) {
        console.log('fizz');
    } else if (number % 5 === 0) {
        console.log('buzz');
    }
}
```

---

# 3. Temperatures

Write functions to convert temperatures to and from Celsius, Fahrenheit.

Formula:
```
c/5 = (f-32)/9
```

```js
function cToF(celsius) {
  const cTemp = celsius;
  const cToFahr = cTemp * 9 / 5 + 32;

  return cToFahr;
}

function fToC(fahrenheit) {
  const fTemp = fahrenheit;
  const fToCel = (fTemp - 32) * 5 / 9;

  return fToCel;
}
```

---

# 4. Strings

Write a function to create a new string adding `ab` in front of a given string. If the given string begins with `ab` then return the original string.

```js
function string_check(str) {
  if (str === null || str === undefined || str.substring(0, 2) === 'ab') {
    return str;
  }

  return "ab" + str;
}
```

---

# 5. Salaries

Write a function that given a list of salaries and a decimal with the increase percentage, returns a new list with the salaries updated

```js
function calcSalaries(listOfSalaries, decimal) {
  const newSalaries = listOfSalaries
    .map((salary) => {
       return salary * (1 + decimal);
    });

  return newSalaries;
}
```

---

# 6. Index an object

Write a function that given a list of objects, returns an object with all elements indexed by the property id.

```js
function indexObjectById(listOfObjects) {
  const indexedById = listOfObjects
    .reduce((acc, current) => {
      acc[current.id] = current;

      return acc;
    }, {});

  return indexedById;
}
```

---

# 7. Remove elements from list

Write a function that given a list of numbers, removes all elements higher than 10.

```js
function removeElements(list) {
  const elementsHigherThan10 = list
    .filter((ele) => { return ele > 10});

  return elementsHigherThan10;
}
```

---

# 8. Largest event number

Write a function to get the largest even number from an arry of integers.

```js
function max_even(arr) {

  arr.sort((x, y) => y - x);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) return arr[i];
  }
}
```

---

# 9. Multiply evens

Write a function that given a list of numbers, returns a list of even numbers multiplied by 2.

```js
function multiplyEvens(list) {
  const multipliedEvens = list
    .filter((ele) => { return ele % 2 === 0; })
    .map((ele) => { return ele * 2; });


  return multipliedEvens;
}
```

---

# 10. Swap

Write a function to swap the first and last elements of a given arry of integers

```js
function swap(arr) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];

    return arr;
}
```

---

# 11. Monotonous list

Write a function to check whether a given arry of integers represents either a strictly increasing or a strictly decreasing sequence.

```js
function is_monotonous(list) {
    if (list.length === 1) {
        return true;
    }

    let num_direction = list[1] - list[0];

    for (let i = 0; i < list.length - 1; i++) {
        if (num_direction * (list[i + 1] - list[i]) <= 0) {
            return false;
        }
    }

    return true;
}
```

---

# 12. Voewls

Write a function that accepts a string as a parameter and counts the number of vowels within the string.

```js
function vowel_count(str) {
  var vowels_list = 'aeiouAEIOU';
  var vcount = 0;

  for(let x = 0; x < str.length ; x++)
  {
    if (vowel_list.indexOf(str[x]) !== -1)
    {
      vcount += 1;
    }

  }
  return vcount;
}
```

---