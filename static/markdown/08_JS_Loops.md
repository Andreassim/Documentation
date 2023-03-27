# Loops

Javascript have two types of loops ```for```and ```while```

## for

for iterates until a condition is met.

``` javascript
for(let i = 0; i < 5; i++){
    console.log(i);
}
```

This would print 0,1,2,3,4 into the console or terminal.


## while

while keeps running until an initial boolean or boolean expression is false.

``` javascript 
let someNumber = 0;

while(someNumber < 5){
    console.log(someNumber);
    someNumber++;
}

```

## for each || for in
for each or for in loops iterates through all objects in a collection and executes some statement for each element

``` javascript
const numbers = [0,1,2,3,4]

for(number in numbers){
    number + 1;
}

```
this includes a side effect of changing the original array.

# Loop functions

Javascript provides functions to loop through arrays.
In general we want to use these functions as they are more clear than writing out long for loops.

## map

Array.map() creates a new array with the results of a callback function we parse into it.

This does not have the side effect of changing the original array.

``` javascript
const numbers = [0,1,2,3,4] // [0,1,2,3,4]

numbers.map(number => number + 1); // [1,2,3,4,5]

```

map is great for executing some function on all elements of an array.


## filter

Array.filter() creates a shallow copy of portion of an array. This means that the resulting array contains the same references to the origrinal values, thus may not be safe to just change without also tuching the original.

``` javascript
const numbers = [0,1,2,3,4] // [0,1,2,3,4]

numbers.filter(number => number > 2); // [3,4]

```

filter should be used when you want to find a subset of a given collection.


## reduce 

Array.reduce() returns a single value by running through all the elements executing a callback function on each element.

here is an example from [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

```javascript
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10

```

Reduce can be used to ie. add together elements of an array