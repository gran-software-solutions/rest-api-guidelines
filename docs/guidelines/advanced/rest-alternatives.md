---
sidebar_position: 3
---

# REST alternatives

## REST vs gRPC

* Guidelines vs. Rules:

  REST is a set of guidelines for designing web APIs without enforcing anything. On the other hand, gRPC enforces rules by defining a .proto file that must be adhered to by both client and server for data exchange1.
* Underlying HTTP Protocol:

  REST provides a request-response communication model built on the HTTP 1.1 protocol. Therefore, when multiple requests reach the server, it is bound to handle each of them one at a time. However, gRPC follows a client-response model of communication for designing web APIs that rely on HTTP/2. Hence, gRPC allows streaming communication and serves multiple requests simultaneously1.
* Data Exchange Format:

  REST typically uses JSON and XML formats for data transfer. However, gRPC relies on Protobuf for an exchange of data over the HTTP/2 protocol1.
* Serialization vs. Strong Typing:

  REST requires serialization and conversion into the target programming language for both client and server using JSON or XML which increases response time and possibility of errors while parsing request/response. However, gRPC provides strongly typed messages automatically converted using Protobuf exchange format to chosen programming language1.
* Latency:

  REST utilizing HTTP 1.1 requires a TCP handshake for each request which can suffer from latency issues. On the other hand, gRPC relies on HTTP/2 protocol which uses multiplexed streams allowing several clients to send multiple requests simultaneously without establishing new TCP connection for each one1.
* Browser Support:

  REST APIs on HTTP 1.1 have universal browser support while gRPC has limited browser support because numerous browsers have no mature support for HTTP/2 so it may require gRPC-web and proxy layer to perform conversions between HTTP 1.1 and HTTP/22.

## REST vs GraphQL

Data Control: GraphQL gives you more control over your data since it allows you to request exactly what you need in a single query1.
Speed & Efficiency: REST APIs can be faster and more efficient since they can quickly return large amounts of data1.
Data Modeling: In a REST API, the server defines the data model and endpoints that represent that data while in GraphQL, the client defines the data model and server provides data based on client’s query2.
Caching: In a REST API, client can cache response for particular endpoint to avoid making multiple requests to server while caching with GraphQL is more complex due to its flexible nature2.

## Other alternatives

* [SOAP](https://en.wikipedia.org/wiki/SOAP)
* [JSON-RPC](https://www.jsonrpc.org/)
* [XML-RPC](https://en.wikipedia.org/wiki/XML-RPC)
* [MQTT](https://en.wikipedia.org/wiki/MQTT)
* [WebSockets](https://en.wikipedia.org/wiki/WebSocket)
* [WebRTC](https://en.wikipedia.org/wiki/WebRTC)