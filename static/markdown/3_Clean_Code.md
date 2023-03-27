# Clean Code
Clean code is a set of rules to follow that should allow the next developer, wether is someone else or you doesnt matter, to read and understand the code quicker.

If code adheres to the convention and you know the convention you can make assumptions about it which should allow for quicker understanding. This assumption however breaks if the code doesnt live up to it and we made incorrect assumptions.


## Code Conventions
Code conventions are created for setting up a common ground so that the next developer looking at the code can follow what was created.
An example could be setting up the REST API endpoints in the correct order. 

Naming conventions vary for different languages. 
Javascript uses ```camelCase``` for variables and functions
Python uses lowercase single letters and underscore for space in variables and functions.


## Linter

A linter can be used to force team members to adhere to the same coding standard.
for example in terms of spacing, indentation and use of semicolons.

A rule can be set up in a pipeline run before a pull request to decline the PR if it is not up to the teams standard 
