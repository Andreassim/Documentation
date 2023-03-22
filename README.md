# Documentation

The goal of this project is to create an application that servers static files though express.


the static folder is for files that needs to be converted to html
the public folder is for the files we want to serve.

When in the directory you can use
```
npm start
```
To start the server.

This will run ```./util/setup.js``` to generate the html in ```./public```
and then start the server with ```node app.js```

Manually run it by first running
```node ./util/setup.js```
and then running
```node app.js```
or
```nodemon app.js```

The amount of pages depends on how many markdown files have been created in
```./static/markdown```

TODO figure out a way to convert markdown to html and style it