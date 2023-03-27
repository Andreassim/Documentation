# REST

A REST API is stateless, meaning that every transaction is isolated and not dependendant on previous transactions a client has made.

The response is usally in JSON but could also be in other formats like html or xml


## REST API Example

Theres is a convention for the order of the requests.
It goes as follows: GET, POST, PUT, PATCH, DELETE

Here is an example with a song api:

|HTTP Request   |Endpoint   |Description  |Example|
|---|---|---|---|
|GET   |/songs   |Fetch all songs   |/songs|
|GET   |/songs/`<id>`   |Fetch specific song by `<id>`|/songs/1|
|POST   |/songs   |Create a new song   |/songs|
|PUT   |/songs/`<id>`   |Updates a specific song  |/songs/1|
|PATCH |/songs/`<id>`   |Updates a specific song  |/songs/1|
|DELETE   |/songs/`<id>`   |Delete a specific song  |/songs/1|