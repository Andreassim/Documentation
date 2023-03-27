# Javasciprt Datatypes

Javascript has the following datatypes

## String
A string is a series of characters

it can be declared three ways:

``` javascript
const stringDoubleQuotes = "this is a string"
const stringSingleQuotes = 'this is a string'
const stringTemplateLiterals = `this is also a string`
```

String template literals are special as they can be used for string inteerpolation where we can add tags to it.

``` javascript
const greeting = 'hello'
const stringTemplateLiterals = `${greeting} + world`
```

the result will be

``` bash
"hello world"
```

## Number
Numbers is used to represents numeric values

``` javascript
const integer = 12
const float = 0.23
```
all of above is numbers

## BigInt
BigInt is used for representing numeric values that are too large for number

## Boolean
Boolean is used to represent value True or False
``` javascript
const true = True
const false = False
```

## Undefined
undefined is assigned to variables that have yet to be defined.

``` javascript
let notDefined
```
the value of notDefined will be undefined.

## Null
null is of type object, for legacy reasons.

null is treated as false for boolean operations.

``` javascript
!null // true
null // false
```

null is different to undefined

``` javascript
null === undefined // false
null == undefined // true
```

## Object 
Objects are used to store differnet entities and collections

A example of an object could be an array is an object.

``` javascript
const myArray = [1,2,3,4,5]
```