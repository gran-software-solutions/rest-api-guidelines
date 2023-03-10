---
sidebar_position: 2
---

# Filtering data sets

Data tends to grow over time, and as such, it is important to be able to filter the data sets that are returned by the API.
This allows for effective usage of resources, since it will only return the data set that is required.

On the implementation side, this will allow for a more efficient use of the databases, since it will only query the data
needed, avoiding extraneous fetching anti-pattern[^1].

For many APIs it will be critical to come up with an effective filtering strategy.

## Filtering is not trivial

Filtering data is a complex topic, in pretty much any technology dealing with data. Be it SQL, NoSQL, ElasticSearch, or
any other technology.

SQL, for example, provides a rich set of operators, such as `AND`, `OR`, `LIKE`, `IN`, `BETWEEN`, `IS NULL`, `IS NOT NULL`, `>`, etc.

If we want to design for such a rich set of operators, the closest we may get is to use a query language such as [OData](/docs/guidelines/odata).

Many API providers try to find a balance between the richness of the filtering capabilities, and the simplicity of the API.

To allow for effective filtering of the results of the `HTTP` response, the `filter` query parameter should be used.


## Example

```bash
curl 'https://api.acme.com/users/users?filter=firstName eq "John" and lastName eq "Doe"'
-H 'Host: api.example.com'
-H 'Accept: application/json'
```

[^1]: https://learn.microsoft.com/en-us/azure/architecture/antipatterns/extraneous-fetching/