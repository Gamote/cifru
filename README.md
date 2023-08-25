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
import c from 'cifru';

const query = c
  .match(c.node('u').labels('Actor', 'Musician').props({ name: 'Cami' }))
  .return('u')
  .query();

console.log(query);
// => "MATCH (u:Actor|Musician {name: 'Cami'}) RETURN u"
```

## Testing

```bash
yarn test
```