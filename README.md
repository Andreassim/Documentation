# Documentation

The goal of this project is to create an application that servers static files though express.


the static folder is for files that needs to be converted to html
the public folder is for the files we want to serve.

before running express with ``` node app.js ```
we need to run setup.js ```node setup.js ```
setup.js fiddles with the files and creates our html files.


The amount of pages depends on how many markdown files have been created in
```./static/markdown```


TODO figure out a way to convert markdown to html and style it