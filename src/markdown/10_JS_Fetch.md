# Fetch two ways

fetch() takes in an url and an optional options for when we want to change the request to ie. a POST request instead.
Here are two ways of using fetch, we are using [BoredAPI](http://www.boredapi.com/) as an example. 
We are also assuming we are recieving json.

## .then

``` javascript

fetch("http://www.boredapi.com/api/activity/")
    .then(response => response.json())
    .then(
        result => 
            {
                // do something
            }
    );

```

## async/await


``` javascript
const request = await fetch("http://www.boredapi.com/api/activity/");
const json = await request.json();

// do something

```






