// #1 Conditional

function myFunction(number) {
    if (number < 5) {
        return number + 2; 
    }
    else if (number >= 5) {
        return number + 3;
    }
}

console.log(myFunction(6));

// #2 Fizzbuzz

function myFunction(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "fizzbuzz"; 
    }
    else if (number % 5 === 0) {
        return "buzz";
    }
    else if (number % 3 === 0) {
    		return "fizz";
    }
}

console.log(myFunction(15));

// #3 Temperatures -- nao funcionou --

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

cToF(60);
fToC(45);

// #4 Strings

function func(string) { 
    if (string[0] === 'a' && string[1] === 'b') {
        return string;
    }
    return 'ab' + string;
} 

console.log(func('Cenas'))


// #5 Salaries

function func(salaries, increase) {
    let newSalaries = [];
    for(let i = 0; i < salaries.length; i++) {
       newSalaries.push(salaries[i] * (1+increase));
    }
    return newSalaries;
}

let newArray = func([1000, 2000, 3000], 0.5);
    console.log(newArray);

    // ou

const calcSalariesFirst = (listOfSalaries, increase) => {
    //...
}

// #6 Index an object

const arr = [
    {
        name: 'teste1',
        id: 1
    },
    {
        name: 'teste2',
        id: 2
    }
];

const indexObjectById = (list) => {

    return list.reduce((acc, item) => {
        acc[item.id] = item;

        return acc;
    }, {});
}

console.log(indexObjectById(arr))

// #7 Remove elements from list


function myFunction(numbers) {
    let newArray = numbers.filter(function (number) { return number > 10});
    return newArray;       
}

let cenas = myFunction([1, 2, 35]);
console.log(cenas);

// #8 Largest number 

function largestNumbers(array) {
    let filtered = array.filter(function (number) { 
        return number % 2});
    return filtered;
}

let coisas = largestNumbers([34, 20, 2000, 10000]);
console.log(coisas);

// #9 Multiply evens

function multiplyEvens(numbers) {
	let newArray = numbers.filter(function (number) {
           return  number % 2 === 0
       })
       
       for(let i = 0; i < newArray.length; i++) {
           newArray[i] *= 2 
       }
   
       console.log(newArray)
       return newArray
   }
   
   let cenas = multiplyEvens([24, 25, 76, 40]);

         // ou (não a melhor forma)
	
    let newArray = [24, 25, 76, 40].filter(function (number) {
        return  number % 2 === 0
    })
    
    for(let i = 0; i < newArray.length; i++) {
    	newArray[i] *= 2 
    }

    console.log(newArray)
