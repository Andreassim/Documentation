# Callback Functions

Callback functions are function parsed as arguments to other functions and executed as part of the function.

a quick example:

``` javascript
function hello(){
    console.log("hello world");
}

function callbackExample(callback){
    // Do something
    callback();
    // we can do something else here
}

callbackExample(hello);

```

We can also inline a function with a arrow function so we can call ``` callbackExample ``` like this.

``` javascript
callbackExample(() => {
    console.log("hello world")
})
```

which would result in the same result but we didnt have to define the function first.

## Examples

In Express.js routes are defined as:

``` javascript
app.get(route, callback)
```

a filled out example:

``` javascript
app.get("/", (req, res) =>{
    res.send({message: "Hello world"})
})
```

