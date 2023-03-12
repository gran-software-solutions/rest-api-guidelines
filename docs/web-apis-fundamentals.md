---
sidebar_position: 2
---

# Web APIs Fundamentals

## Platform independence

REST APIs are designed to work across different platforms because they use standard protocols like `HTTP` and `HTTPS`. They communicate using common data exchange formats like `JSON` and `XML`.
`JSON` is more commonly used because it’s lightweight and easy to read.

REST APIs are stateless, meaning the server doesn’t store client state. This makes it easy to scale them by adding
more servers. Overall, REST APIs allow systems developed with different technologies to communicate seamlessly and are easy to scale.

## Consumer driven contracts

Knowing what clients exactly expect from your API is crucial to building a successful API. Consumer driven contracts are a way to define clear expectations between the API provider and the consumer.
Only when the API provider and the consumer agree on the contract, the API can be built. This ensures that the API is built to meet the consumer’s needs. Nevertheless, it's important to keep your
APIs extensible and flexible to allow for future changes, and allow for increased adoption.

## API evolution through backwards compatibility

REST APIs are designed to be backwards compatible. This means that the API can be modified without breaking existing clients. This is important since more often than not, clients are not under your control.
Clients of your APIs are busy building their own products and are not always able to upgrade to the latest version of your API, due to lack of interest or time.

Big companies like Google advocate that you should not do versioning of your APIs. This implies that it will be hard to fix bad API design decisions in the future. It's important to think hard when designing
an initial API version.

## Design for simplicity, intuitiveness, flexibility and consistency

Your APIs have to be **consistent**. If you offer a similar resource in two different APIs, it should have the same logic, structure and naming conventions. This makes it easier for clients to use your APIs, and
learn new ones.

So, if you have an API that returns a list of `users`, this is an example of a simple and intuitive API:

```http
GET https://api.acme.com/users?limit=10&offset=5&sortBy=name+asc&filter=name eq John and age lt 30
```

Make sure that your `orders` API doesn't look like this:

```http
GET https://api.acme.com/orders?top=10&skip=5&sort=name&order=asc&filter=name:John&filter=age:lt:30
```

With **simplicity** in mind, you should still allow for `GET https://api.acme.com/orders` to return orders (with some defaults applied, like default limit of `50`, and a link to the next page of results contained in the response).

When talking about **flexibility**, it may happend that your clients need to control the "shape" of the response, to avoid over/under fetching of data. You can, for instance, allow them to specify which fields they want to get in the response,
using a `fields` query parameter, such as `GET https://api.acme.com/orders?fields=id,name,price`.

As demonstrated above, we can also control the size of a "page of data" using `limit` and `offset` query parameter. We should also allow for sorting responses, using `sortBy` query parameter.

It's a bit of art to find a balance between simplicity and completeness/flexibility. Whatever you come up with, your APIs should [use OpenAPI](/guidelines/use-open-api.md) to document all the promises your API makes to clients.

## Avoid chatty APIs

Chatty APIs are APIs that require many requests to complete a single task. This is bad for performance (establishing `HTTP` connections has its price) and user experience (possible client responsiveness implications).
Additionally, it exposes your business logic to the client, which is not a good idea, as this changes regularly.

If, for instance, on the `orders` example above, you want to know which products are in each order, you should not have to make a separate request for each order to get the products. Instead, you can
have a query parameter that allows you to include the `products` in the response, such as `GET https://api.acme.com/orders?include=products`. This way you can get additional data on demand, and only if you need them.

If your user experience differs significantly between the web and mobile clients, you should consider having separate APIs for each platform. This allows you to optimize the API for each platform.
So-called [Backend for Frontend pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/backends-for-frontends).
