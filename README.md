## Description

NestJS reproduction.

To reproduce run the application on `http://localhost:3000/graphql`

run the following graphql query

```graphql
# Write your query or mutation here
{
  cakes {
    name
    shelfLife
    ... on ChocolateCake {
      hasCaramel
    }
  }
}
```

Observe the error
`"message": "Cannot return null for non-nullable field ChocolateCake.shelfLife.",`

navigate to `cake.resolver.ts` and see we have a properly registered field resolver

```typescript
  @ResolveField(() => String)
  shelfLife(): string {
    return '2021-10-05';
  }
```

If we go to the `app.module.ts`
we are registering the federation resolver

```typescript
 GraphQLFederationModule.forRoot({
      path: '/graphql',
      autoSchemaFile: true,
    }),
```

simply using the `GraphQLModule` allows the interface field resolver to behave normally.

```typescript
 GraphQLModule.forRoot({
      path: '/graphql',
      autoSchemaFile: true,
    }),
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
