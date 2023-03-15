---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Prefer HTTP request header

`Prefer` `HTTP` request header[^1] allows the client to specify a set of preferences that the server should honor.

The server is not required to honor the preferences, but if it does, it should respond with a `Preference-Applied` response header.

One of the preferences a client can specify is `return=minimal` or `return=representation` to indicate whether the server should return the updated
resource representation in the response body. This is useful in situations where, for instance, some clients don't need the created / updated resource.
In such cases, they can specify `return=minimal` to avoid the overhead of sending the resource representation. On the other hand, some clients may need it,
in which case they can specify `return=representation`.

If the server honors the preference, it should respond with a `Preference-Applied` response header[^2] with the value of the preference that was applied.

## Example of `Prefer` `return` preference

<Tabs>
<TabItem value="minimal" label="Prefer: return=minimal">

```http
POST https://api.acme.com/orders HTTP/1.1
Content-Type: application/json
Prefer: return=minimal

{
  "items": [
    {
      "product": "acme-123",
      "quantity": 1
    },
    {
      "product": "acme-456",
      "quantity": 2
    }
  ]
}

HTTP/1.1 201 Created
Content-Type: application/json
Preference-Applied: return=minimal
```

</TabItem>
<TabItem value="representation" label="Prefer: return=representation">

```http
POST https://api.acme.com/orders HTTP/1.1
Content-Type: application/json
Prefer: return=representation

{
  "items": [
    {
      "product": "acme-123",
      "quantity": 1
    },
    {
      "product": "acme-456",
      "quantity": 2
    }
  ]
}

HTTP/1.1 201 Created
Content-Type: application/json
Preference-Applied: return=representation

{
  "id": "123",
  "items": [
    {
      "product": "acme-123",
      "quantity": 1
    },
    {
      "product": "acme-456",
      "quantity": 2
    }
  ]
}
```

</TabItem>
</Tabs>

[^1]: https://httpwg.org/specs/rfc7240.html#rfc.section.2
[^2]: https://httpwg.org/specs/rfc7240.html#rfc.section.3
