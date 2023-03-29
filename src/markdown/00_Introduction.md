# Introduction

This is my hand-in for mandatory 1

The goal is to create a documentaion page!

You can access the different pages in Navigation to the left.

For now documentation pages are located in ./src/markdown/, it could be cool to allow for loading from external directories, so when running the program you could define which local directory your markdown files were in. Or even further load the files from a remote directory from maybe github. This would introduce new problems to solve with editing and of course we would need to sanitize the data from the remote source.

I am using a cookie and a cookie parser to authenticate that the user have gotten the correct secret to allow them to edit. This is mostlye because I dont know the correct way of doing it. There is no encrytion in anyway, so this is certainly not secure.
