---
sidebar_position: 3
---

# HTTP Methods idempotency and safety

:::tip Idempotency definition
A request method is considered "idempotent" if the intended effect on the server of multiple identical requests with that method is the
same as the effect for a single such request[^1].
:::

:::tip Safety definition
A HTTP method is considered "safe" if it does not change the state of the server[^2].
:::

## Idempotency

Idempotency is a very important property of HTTP methods. It allows the clients to **retry requests** in case of failure, without bringing
the server to an inconsistent state.

It's also very important to mention that idempotency doesn't imply that, for instance, a response status code must
be the same for the same request. For instance, deleting a user will product `204 No Content` on the first request, but `404 Not Found` further on.

## Safety

Regarding safety property, it's important to mention that some state can be changed on the server, such as updating the cache after reading resources from database, producing server logs, updating API access statistics, etc. These state changes are not requested by the client, but are a side effect of the
request.

HTTP method safety allows the clients to **cache responses**. Knowing that there are no state changes on the server side, the client can pre-fetch resources and cache them,
which, for instance, browsers do by default.


## HTTP methods idempotency and safety

Given below is a table with the most commonly used HTTP methods and their idempotency and safety properties

| Method | Idempotent | Safe |
|--------|------------|------|
| GET    | Yes        | Yes  |
| HEAD   | Yes        | Yes  |
| OPTIONS| Yes        | Yes  |
| PUT    | Yes        | No   |
| DELETE | Yes        | No   |
| POST   | No         | No   |
| PATCH  | No         | No   |

:::caution
For API implementers, it's important to design and implement APIs that respect both of these properties.
It's also worth mentioning this in the OpenAPI documentation.
:::

[^1]: [HTTP Method Idempotency](https://tools.ietf.org/html/rfc7231#section-4.2.2)
[^2]: [HTTP Method Safety](https://developer.mozilla.org/en-US/docs/Glossary/Safe/HTTP)
