---
sidebar_position: 3
---

# API versioning

:::tip Use `Accept` header for versioning your APIs.
:::

The three most common variants include versioning in the URL, versioning via custom HTTP header, and versioning
via `Accept` HTTP header. [^1]
The advice is to start without versioning at all, and only introduce it when you need to. If you do need to version, use `Accept` header.

Some examples of how it could look like:

* `application/vnd.acme.order.v2+json`
* `application/vnd.toyota.car.v3+xml`

Or, more generally `application/vnd.{vendor}.{resource}.{version}+{format}`

[^1]: [Your API versioning is wrong...](https://www.troyhunt.com/your-api-versioning-is-wrong-which-is/)