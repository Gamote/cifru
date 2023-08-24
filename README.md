# cifru

[![NPM version](https://img.shields.io/npm/v/cifru.svg?style=flat)](https://www.npmjs.com/package/cifru)
[![NPM downloads](https://img.shields.io/npm/dm/cifru.svg?style=flat)](https://www.npmjs.com/package/cifru)

**Cifru** (🗣 `[ˈt͡ʃifru]`): Cypher with no strings attached! Dive into our lightweight ORM that makes writing production-ready queries feel like a breeze.

## Installation

```bash
yarn add cifru
```

## Usage

```ts
import { qb } from 'cifru';

qb.match(qb.node('u').label('user')).return().query();
// => "MATCH (u:user) RETURN"
```

## Testing

```bash
yarn test
```