# Import Export

## Import

There are two differnet ways of importing in javascript. This depends on wether we use commonJS or modules

If we want to use modules we need to setup it up in package.json simply add:

``` json
"type": "module"
```
### CommonJS
We are going to use express as an example import here.

in commonJS we import by using ```require```

``` javascript
const express = require('express');

// ...
```

### Module
With modules we can use the import syntax:

``` javascript
import express from "express";

// ...
```

if we are importing from something not in node_modules the file path needs to be completed.

``` javascript
import something from "./something.js";
```

if we only want to import doSomething() from something.js we can import it as:

``` javascript
import { doSomething } from "./something.js";
```

we can rename the export using "as":

``` javascript
import { doSomething as dS } from "./something.js";
```


## Export

### commonJS

here is an example of exporting with commenJS

``` javascript
exports.doSomething = function doSomething(){
    //do something
};
```

### Module

Exporting can be done by either tagging the function with export or including it in export default

``` javascript
export function doSomething(){
    //do something
};
```

``` javascript
export default {
    doSomething
};
```