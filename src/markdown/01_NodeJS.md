# NodeJS

Node is a javascript runtime allowing us to run javascript in a backend application


## NPM

Node comes with a build in package manager called NPM.


### Install modules
A package manager can be used to install modules into the project og globally.
to install a package in this case express use the following command:

``` bash
npm install express
```

install can be shortened to:

``` bash
npm i express
```

To uninstall use:

``` bash
npm uninstall express
```

Installing a package adds it as a dependency in package.json and adds the module is added to the directory npm_modules in the project root. 


to install a module globally we can add -g to the command

``` bash
npm install -g <package_name>
```


### Init

npm has a command for initializing a project.
This starts to fill out package.json in the root directory.

This sets up meta data about the project.
```bash
npm init
```
Filling out the prompts in the initiazing process could result in something like this:

``` json
{
  "name": "documentation",
  "description": "documentation website for mandatory 1",
  "version": "0.0.1",
  "main": "app.js",
  "keywords": [
    "documentation"
  ],
  "author": "Andreassim",
  "license": "MIT"
}
```

## Running application

To run a application with node we use the following command:

``` bash
node <file.js>
```

if a script have been setup in package.json we can use

``` bash
npm run <script_name>
```



## Package.json

package.json contains meta data about the project. 
This includes data like project name, version and license.

Furthermore it contains information about dependencies of the project.

an example of dependencies:

``` json
  "dependencies": {
    "express": "^4.18.2",
    "marked": "^4.3.0"
  },
  "devDependencies": {
    "@tailwindcss/typography": "^0.5.9",
    "cross-env": "^7.0.3",
    "tailwindcss": "^3.2.7"
  },
```

Here dependecies referes to modules used when running the application and devDependencies refers to modules used during development which arent required for production.


package.json may also contain scripts that can be used to run the application, run tests or do something third

example scripts:

``` json
  "scripts": {
    "dev": "PORT=8081 nodemon app.js",
    "prod": "PORT=80 node app.js",
    "cross-dev": "cross-env PORT=8080 nodemon app.js",
    "cross-prod": "cross-env PORT=80 node app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```
First example is run by:

``` bash
npm run dev
```

This will setup an environment variable called PORT and set it to 8081 and then app.js with nodemon.

