import { it, describe, expect } from 'vitest';

import c, { Direction } from '../src';

describe('Integration tests', () => {
  it('MATCH ()', () => {
    expect(c.match(c.node()).query()).toBe('MATCH ()');
  });

  it('OPTIONAL MATCH ()', () => {
    expect(c.match(c.node()).optional().query()).toBe('OPTIONAL MATCH ()');
  });

  it('MATCH (u)', () => {
    expect(
      c
        .match(
          c.node({
            variable: 'u',
          }),
        )
        .query(),
    ).toBe('MATCH (u)');
  });

  it('MATCH (:User)', () => {
    expect(c.match(c.node({ labels: ['User'] })).query()).toBe('MATCH (:User)');
  });

  it('MATCH (u:User)', () => {
    expect(
      c
        .match(
          c.node({
            variable: 'u',
            labels: ['User'],
          }),
        )
        .query(),
    ).toBe('MATCH (u:User)');
  });

  it('MATCH (u:Provider|Client)', () => {
    expect(
      c
        .match(
          c.node({
            variable: 'u',
            labels: ['Provider', 'Client'],
          }),
        )
        .query(),
    ).toBe('MATCH (u:Provider|Client)');
  });

  it('MATCH (u:User|Group|Post)', () => {
    expect(
      c
        .match(
          c.node({
            variable: 'u',
            labels: ['User', 'Group', 'Post'],
          }),
        )
        .query(),
    ).toBe('MATCH (u:User|Group|Post)');
  });

  it('MATCH (u:User) RETURN u', () => {
    expect(
      c
        .match(
          c.node({
            variable: 'u',
            labels: ['User'],
          }),
        )
        .return('u')
        .query(),
    ).toBe('MATCH (u:User) RETURN u');
  });

  it(`MATCH (u:User {name: 'John', isActive: true, age: 30}) RETURN u`, () => {
    expect(
      c
        .match(
          c.node({
            variable: 'u',
            labels: ['User'],
            properties: { name: 'John', isActive: true, age: 30 },
          }),
        )
        .return('u')
        .query(),
    ).toBe(`MATCH (u:User {name: 'John', isActive: true, age: 30}) RETURN u`);
  });

  it(`MATCH (u:User)--(m) RETURN m`, () => {
    expect(
      c
        .match(
          c
            .node({
              variable: 'u',
              labels: ['User'],
            })
            .node({
              variable: 'm',
            }),
        )
        .return('m')
        .query(),
    ).toBe(`MATCH (u:User)--(m) RETURN m`);
  });

  it(`MATCH (u:User)-[r:Role]->(m:Movie) RETURN r`, () => {
    expect(
      c
        .match(
          c
            .node({
              variable: 'u',
              labels: ['User'],
            })
            .relation({
              direction: Direction.Outgoing,
              variable: 'r',
              labels: ['Role'],
            })
            .node({
              variable: 'm',
              labels: ['Movie'],
            }),
        )
        .return('r')
        .query(),
    ).toBe(`MATCH (u:User)-[r:Role]->(m:Movie) RETURN r`);
  });
});
