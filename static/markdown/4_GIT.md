# GIT

Git is version control program to manage changes to files in a project.
It runs locally and can send changes to external repository - this could be GitHub, GitLab or some other source control management system

## status
``` bash
git status
```

status shows a list of files that have changed and files that are yet to be tracked.



## add

add is function to add files or changes to the next commit.

To add a single file we type in the filename after add:
``` bash
git add <file>
```

we can add all files by using:
``` bash
git add .
```

Adding all files may not be the right option as we may have changed something we did not want.

This part is called staging, we add the files we want to commit

## restore
we can then restore the file by:

```bash
git restore <file>
```

we can also restore all
```bash
git restore .
```


## commit
commit for writing the changes to git. We will have to add a message to this usually explaining what was done and maybe reasoning for the change

```bash
git commit
```
This will open a terminal text editor for adding a multiline message. I believe nano is setup by default but this can be changed in gits setup.

we can also inline a message:

```bash
git commit -m "message"
```

## push
push is for sending the commit to the remote repository.

This is done with:
```bash
git push
```
This should be succesful if you are allowed to push the remote repository.


## clone
clone is for copying a repository.

```bash
git clone <link_to_repository>
```

this will add a copy of the repository to your working directory.

## .gitignore

.gitignore is a file that is used to exclude files or folders from git.

to ignore a file or folder simply add it to .gitignore

```
node_modules/ #ignored folder
app.js // #ignores app.js
```