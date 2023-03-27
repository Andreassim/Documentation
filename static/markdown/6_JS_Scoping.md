# JS Scoping

Javascript has 3 ways declaring variables

``` javascript
const cantBeReassigned = "test"
let canBeReassigned = "let can be reassinged"
var dontUseVar = "we should avoid using var"
```

# Dont use var

var should not be used as it has global scope.
This means that any variable assigned with var can be changed from anyplace at any point.

we want to encapsulate our variables this is provided with let and const that provides us with block scope.

# Block scope

a block is defined by a starting "{" and a ending "}"
using let and const within a block makes them unavailble outside of the block or in another phrase out side of scope

``` javascript
{
    const x = 1
}
console.log(x) //does not work as x is out of scope.
```

in above case if we used var it would work.

# const and let

the difference of const and let is that let can be reassigned later in the code execution.

``` javascript
{
    let x = 1 // x = 1
    x = "test" // x = "test"
}
```

where const reasigning is not allowed

``` javascript
{
    const  x = 1 // x = 1
    x = "test" // not allowed
}
```
We want to use const where its possible.

