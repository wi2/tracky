# Simple Tracking service (example)

## Motivation: Practice / experimentation

TypeScript, Node, graphql, ...

## npm Packages

- `graphql` for the language query
- `apollo-server` to create server (GraphQL)
- `type-graphql` to generate schema with TypeScript
- `typeorm` to connect to the database
- `class-validator`: to validate input
- `dataloader` to batch and to cache database fetching
- ...

## STEP 1 Create Tracking service

**status:** in progress

### done

- create server
- create schema
- create methods (accountCreate, trackCreate, ....)
  (see below `how to use it` for the list of all methods currently available)

### TODO

- change information type in Track model
- use enum for type
- add validation
- improve performance request with `dataloader`
- add filter/sort, ...
- add mutation for Array of tracks
- manage errors

## STEP 2 Tracking in real time

**status:** none

### TODO

- create UI to list all tracks
- add real time

## STEP 3 Auth & Admin UI

**status:** none

### TODO

- add jwt (login/register)
- add auth directive
- UI

## STEP 4 add role management

**status:** none

### TODO

- add extension to manage role with type-grapql
- UI
- ...

## How to use it (for now)

```graphql
mutation {
  accountCreate(data: { name: "Account 1" }) {
    id
    name
  }
}
```

```graphql
mutation {
  trackCreate(
    data: { information: "some information", type: "action", accountId: "1" }
  ) {
    information
    type
    accountId
    account {
      id
      name
    }
  }
}
```

```graphql
{
  tracks {
    id
    information
    type
    account {
      id
      name
    }
  }

  track(id: "1") {
    id
    information
    type
    account {
      id
      name
    }
  }
}
```

```graphql
{
  accounts {
    id
    name
    tracks {
      type
      information
    }
  }

  account(id: "1") {
    id
    name
    tracks {
      type
      information
    }
  }
}
```
