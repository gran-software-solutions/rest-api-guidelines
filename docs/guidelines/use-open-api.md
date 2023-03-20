---
sidebar_position: 1
---

# Use OpenAPI

[OpenAPI](https://www.openapis.org/) is a human and machine-readable specification for describing, producing and consuming REST APIs.
It provides a common understanding of the API for both the producer and consumer.

It is a community accepted standard, with massive adoption and tooling support (client and server code generation, documentation, testing, mocking, etc).

It offers a concise way to describe endpoints, parameters, requests and responses, security, and [more](https://spec.openapis.org/oas/v3.1.0#version-3-1-0).
Technically, it is a `JSON` or `YAML` file that describes the API.

On the other hand, OpenAPI comes with a learning curve, in case of complex APIs it can get verbose (can be solved by using external files for common definitions).
The specification is tied to REST APIs, meaning that if you have a GraphQL, gRPC or WebSocket API, you may have difficulties to describe it with OpenAPI.

:::tip
Examples of OpenAPI specifications you can find [here](/docs/category/example-apis)
:::