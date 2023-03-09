---
sidebar_position: 2
---

# Web APIs Fundamentals

## Core design principles

### Platform independence

REST APIs are designed to work across different platforms because they use standard protocols like `HTTP` and `HTTPS`. They communicate using common data exchange formats like `JSON` and `XML`.
`JSON` is more commonly used because it’s lightweight and easy to read.

REST APIs are stateless, meaning the server doesn’t store client state. This makes it easy to scale them by adding
more servers. Overall, REST APIs allow systems developed with different technologies to communicate seamlessly and are easy to scale.

### Consumer driven contracts

Knowing what clients exactly expect from your API is crucial to building a successful API. Consumer driven contracts are a way to define clear expectations between the API provider and the consumer.
Only when the API provider and the consumer agree on the contract, the API can be built. This ensures that the API is built to meet the consumer’s needs. Nevertheless, it's important to keep your
APIs extensible and flexible to allow for future changes, and allow for increased adoption.

### API evolution through backwards compatibility

REST APIs are designed to be backwards compatible. This means that the API can be modified without breaking existing clients. This is important since more often than not, clients are not under your control.
Clients of your APIs are busy building their own products and are not always able to upgrade to the latest version of your API, due to lack of interest or time.

Big companies like Google advocate that you should not do versioning of your APIs. This implies that it will be hard to fix bad API design decisions in the future. It's important to think hard when designing
an initial API version.