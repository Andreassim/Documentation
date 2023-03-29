# Documentation

Express application created for serving documentation.

The documentation is writtin in markdown located here
```
./static/markdown
```

pages are rendered through a homemade template engine
templates a located here
```
./static/html
```

# HACKS

Logging in with the single user that is hardcoded in app.js gives you a token that is then stored in cookies.

This cookie is then used to authenticate wether or not you are allowed to edit.
This is again used when sending the post request from the form.

I hope this satifies the requirements for the assignment. It seems to work.


## Client
The login/logout prompt is changed on clientside by simply hiding the element. This is also done for the edit button.
