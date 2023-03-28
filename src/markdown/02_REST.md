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


## GET

A get request has no body, so if we want to add a filter to the request we can use a query string.

It is added after the endpoint and started with a question mark ```?```

``` 
    /songs?artist=taylor_swift
```

This will should return all songs with artist = taylor_swift, if the endpoints allow for it.

## POST

Unlike get POST has a body, the body is used to create a new resource on the server.

Sending the same POST request multiple times will result in multiple ressource being created.

It is expected that the response of a succesful post request contains the created ressources.


## PUT

PUT requests for a target ressource will either create a resource if it doesnt exist or replace the state of the current ressource with the supplied body data.

PUT replaces the current ressource with a new, so PUT also assumes that the supplied data for a resource is complete.

Unlike POST sending multiple put request will not result in multiple ressources being created, as PUT has a target ressource.

## PATCH

PATCH can be used to supply a ressource with partial data.
Say you want to change the artist of a song PATCH can do that, but unlike PUT we dont have to supply the whole ressource.

## DELETE

DELETE is used to delete ressources.

Similiarly to PUT and PATCH sending mulitple DELETE request will not touch mulitple ressources.

