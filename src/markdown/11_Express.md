# Express

Express is a web framework for NodeJS. 

Documentaion can be found [here](https://expressjs.com/)

it can be installed through npm with the following command:

``` bash
$ npm install express
```

## Routing

express features a simple way of setting up endpoints.
after initializing an instance of express with:

``` javascript
import express from "express";
const app = express();
```

We can add endpoints on ```app``` like this:

``` javascript
app.get("/", (req, res) => {
    res.send("Hello World")
});
```

```req```is the request, so in case the request we contains a query string or a body we can access it through this variable.

``` javascript
app.get("/", (req, res) => {
    res.send(req.query)
});
```


```res``` is the response and we can use it for sending a respone with for example ```res.send()``` as in above example.
Another option is to use ```res.sendFile()``` to send a file for example an html file.

``` javascript
app.get("/", (req, res) => {
    res.sendFile(<filepath>)
});
```

other options for mapping are POST, PUT, PATCH and DELETE

here are some examples from a [Bird API](https://github.com/Andreassim/Kea_Node/blob/main/BirdsAPIv2/app.js)

### POST

``` javascript
app.post('/birds', (req, res) => {
    if(req.body.genus == 'Not a bird'){
        res.status(400).send({message: "Resource not created, not a bird"});
    }
    newBird = {
        id: birdsListAutoIncrement += 1,
        name: req.body.name,
        genus: req.body.genus,
        conservationStatus: req.body.conservationStatus,
        can_fly: req.body.can_fly
    }
    birdsList.push(newBird);

    res.status(200).send({data: newBird ,message: "Resource created"});
});
```

### PUT

``` javascript

app.put('/birds/:id', (req, res) => {
    const id = Number(req.params.id);
    const specificBirdIndex = birdsList.findIndex(bird => bird.id === id);
    if(specificBirdIndex != -1){
        birdsList[specificBirdIndex] = {
            ...req.body,
            id: id
        };

        res.status(200).send({data: birdsList[specificBirdIndex], message: "Resource updated"});
        return;
    }
    res.status(404).send({ data: {}, message: "Resource not found"});
});

```

### PATCH

``` javascript

app.patch('/birds/:id', (req, res) => {
    const id = Number(req.params.id);
    const specificBirdIndex = birdsList.findIndex(bird => bird.id === id);
    if(specificBirdIndex != -1){
        birdsList[specificBirdIndex] = {
            ...birdsList[specificBirdIndex],
            ...req.body,
            id: id
        };
        
        res.status(200).send({data: birdsList[specificBirdIndex], message: "Resource updated"});
        return;
    }
    res.status(404).send({ data: {}, message: "Resource not found"});
});

```


### DELETE 

``` javascript

app.delete('/birds/:id', (req, res) => {
    const id = Number(req.params.id);
    const specificBirdIndex = birdsList.findIndex(bird => bird.id === id);
    if(specificBirdIndex != -1){
        birdsList.splice(specificBirdIndex, 1);

        res.status(200).send({message: "Resource has been removed"});
        return;
    }
    res.status(404).send({message: "Resource not found"});
});


```


## Serve static

By default no files are served staticly with express and we need to define what needs to be served.

Files that should be served staticly includes complete html files, css files and js files.

To serve static files we need load some middleware. here we use ```express.static()```:
We load middleware with ```.use()```

``` javascript
import express from "express";
const app = express();

app.use(express.static(<path>))

```

Generally we use a folder named public or static for files we want to serve.

``` javascript
import express from "express";
const app = express();

app.use(express.static('public'))

```




## Port

