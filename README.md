# cifru

[![NPM version](https://img.shields.io/npm/v/cifru.svg?style=flat)](https://www.npmjs.com/package/cifru)
[![NPM downloads](https://img.shields.io/npm/dm/cifru.svg?style=flat)](https://www.npmjs.com/package/cifru)

**Cifru** (🗣 `[ˈt͡ʃifru]`): cypher queries with no strings attached! Dive into our lightweight ORM that makes writing production-ready queries feel like a breeze.

- **String validation at compile time**: uses TypeScript template literals to validate node and relation names, ensuring correct format before runtime.

## Installation

```bash
yarn add cifru
```

## Usage

```ts
import c, { Direction } from 'cifru';

const query = c
  .match(
    c
      .node({
        variable: 'a',
        labels: ['Actor'],
        properties: { name: 'Cami' },
      })
      .relation({
        direction: Direction.Outgoing,
        variable: 'r',
        labels: ['ACTED_IN'],
        properties: { roles: ['Trinity'] },
      })
      .node({
        variable: 'm',
        labels: ['Movie'],
        properties: { name: 'The Matrix' },
      }),
  )
  .return('a')
  .query();

console.log(query);
// => MATCH (a:Actor {name: 'Cami'})-[r:ACTED_IN {roles: Trinity}]->(m:Movie {name: 'The Matrix'})
//    RETURN a
```

## Testing

```bash
yarn test
```