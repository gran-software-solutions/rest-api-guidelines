---
sidebar_position: 1
---

# Document Management API

## Introduction

Let's create an API for managing documents. We will be able to:

* Upload a document
* List all uploaded documents
* Download a document
* Retrieve metadata of a document
* Update metadata of a document
* Delete a document

## OpenAPI Specification

The final OpenAPI specification will looks like this:

```yaml title="OpenAPI Specification"
openapi: 3.0.0
info:
title: Document Management API
description: API for managing documents
version: 1.0.0
servers:
- url: http://localhost:8080
paths:
```