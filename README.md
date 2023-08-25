# cifru

[![NPM version](https://img.shields.io/npm/v/cifru.svg?style=flat)](https://www.npmjs.com/package/cifru)
[![NPM downloads](https://img.shields.io/npm/dm/cifru.svg?style=flat)](https://www.npmjs.com/package/cifru)

**Cifru** (🗣 `[ˈt͡ʃifru]`): Cypher with no strings attached! Dive into our lightweight ORM that makes writing production-ready queries feel like a breeze.

- **Name Validation at Compile Time**: Uses TypeScript template literals to validate node and relation names, ensuring correct format before runtime.

## Installation

```bash
yarn add cifru
```

## Usage

```ts
import { qb } from 'cifru';

qb.match(qb.node('u').label('User')).return('u').query();
// => "MATCH (u:User) RETURN u"

qb.match(qb.node('u').labels('Actor', 'Musican')).return('u').query();
// => "MATCH (u:Actor|Musician) RETURN u"
```

## Testing

```bash
yarn test
```