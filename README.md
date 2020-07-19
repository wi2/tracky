# just playing with with TypeScript, Node, graphql, ...

## npm Packages

- `graphql` for the language query
- `apollo-server` to create server (GraphQL)
- `type-graphql` to generate schema with TypeScript
- `typeorm` to connect to the database
- `class-validator`: to validate input
- `dataloader` to batch and to cache database fetching
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
  trackCreate(data: { information: "some information", type: "action", accountId: "1" }) {
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
