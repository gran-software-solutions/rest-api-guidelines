---
sidebar_position: 1
---

# Document Management API

## Introduction

Let's create an API for managing documents. We will be able to:

* upload a document
* list all documents
* download a document
* retrieve metadata of a document
* delete a document

## OpenAPI Specification

```yaml
openapi: 3.0.0
info:
title: Document Management API
description: API for managing documents
version: 1.0.0
servers:
- url: http://localhost:8080
paths:
```