# Documentation

The goal of this project is to create an application that servers static files though express.


the static folder is for files that needs to be converted to html
the public folder is for the files we want to serve.

When in the directory you can start the server with the following command:
```
npm start
```


This will run ```./util/setup.js``` to generate the html in ```./public/```
and then start the server with ```node app.js```

Manually run it by first running
```
node ./util/setup.js
```
and then running
```
node app.js
```
or if using nodemon
```
nodemon app.js
```

The amount of pages depends on how many markdown files have been created in
```./static/markdown```
