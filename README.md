# HW1-510
## Instructions to run.
For Rest Client applications to Run use 

```npm test```

For Rest Server applications to Run go to Server folder by

```cd Server```

Run

```node index.js```

## In index.js File following methods are modified to complete REST client task.

- listBranches (GET url is passed to the getDefaultOptionsMethod and then GET call to get all list of userbranches).

- createRepo (repos name is passed with POST options to getDefaultOptions method and then POST call is made to create the repo).

- createIssue ( ownerName and repo name is passed with POST options to getDefaultOptions method and then issueName and issueBody parameters are set in data value of options object and then POST call is made )

- enableWikiSupport ( ownerName and repo name is passed with PATCH options to getDefaultOptions method and has_wiki parameter is set true in data value of options object and then PATCH call is made)

## In Server/index.js File following methods are modified to complete REST server task

- app.post ( to fetch data from request and storing it in map)

- app.get (to get id of data attribute from get request and returing response)


## Concepts

### 1) REST Concerns

- Multiple Requests, As REST architecture has multiple endpoints and each endpoint has own resource sometimes clients will have to do multiple trips to fetch the data.
- Status Codes, As REST API returns 200 Status Code in case of Request was successful but to get actual status we will have to examine response body if data is fetched or not.
- Difficult to Debug for Large inputs, As REST API has request headers, request method, request address and actual payload will have to examine everything to check if we get desired results or not.
- Extra Overhead, As rest uses HTTP protocols it is sometimes time consuming when dealing with large data request as each REST request will have to wait in Cascading tree for the turn.

Refrences

https://www.freecodecamp.org/news/rest-apis-are-rest-in-peace-apis-long-live-graphql-d412e559d8e4
https://dzone.com/articles/top-5-rest-api-design-problems

### 2) Comparison between GraphQL and REST architecture

- REST is an API which is used to transfer data between two systems using HTTP while GraphQL is query language for API which allows clients to specify the descirption of the data they want to fetch and data is fetched using that description
- REST API are not intended for perforamce optimization while GraphQL is build for flexibility and performance optimization.
- REST API has multiple endpoints while GraphQL has single Endpoints
- In REST sometimes we might have to make multiple trips to fetch the data while using GraphQL we can fetch all data in single trip.

### Advantages of REST

- It is platform independent or independent of language uses so can be used in various applications across platforms
- It is highly scalable
- REST based applications are simple to build

### Advantages of GraphQL

- All data can be fetched in Single trip
- Client can determine the actual size of data required and it is not dependent on server for that
- Versioning is not required in GraphQL

References

http://graphql.org/
https://www.chakray.com/advantages-of-rest-api/




## Outputs

### For REST Server

<img width="572" alt="Screen Shot 2022-02-10 at 3 57 03 PM" src="https://media.github.ncsu.edu/user/24749/files/08bbac19-b139-4cc5-b34e-40a5cfde2f50">

### For REST Client

<img width="571" alt="Screen Shot 2022-02-10 at 4 02 57 PM" src="https://media.github.ncsu.edu/user/24749/files/86c8eef2-23df-4c4c-b262-2a50fcb88a62">



