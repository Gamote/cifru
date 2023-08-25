import { it, describe, expect } from 'vitest';

import c from '../src';

describe('Integration tests', () => {
  it('MATCH ()', () => {
    expect(c.match(c.node()).query()).toBe('MATCH ()');
  });

  it('OPTIONAL MATCH ()', () => {
    expect(c.match(c.node()).optional().query()).toBe('OPTIONAL MATCH ()');
  });

  it('MATCH (u)', () => {
    expect(c.match(c.node('u')).query()).toBe('MATCH (u)');
  });

  it('MATCH (:User)', () => {
    expect(c.match(c.node().label('User')).query()).toBe('MATCH (:User)');
  });

  it('MATCH (u:User)', () => {
    expect(c.match(c.node('u').label('User')).query()).toBe('MATCH (u:User)');
  });

  it('MATCH (u:Provider|Client)', () => {
    expect(c.match(c.node('u').label('Provider').label('Client')).query()).toBe(
      'MATCH (u:Provider|Client)',
    );
  });

  it('MATCH (u:User|Group|Post)', () => {
    expect(c.match(c.node('u').labels('User', 'Group', 'Post')).query()).toBe(
      'MATCH (u:User|Group|Post)',
    );
  });

  it('After cloning: (u:Like|Comment|Image)', () => {
    const userNode = c.node('u');
    userNode.label('user');
    userNode.labels('group', 'post');

    const finalPattern = userNode.labels('Like', 'Comment', 'Image');

    expect(finalPattern.query()).toBe('(u:Like|Comment|Image)');
  });

  it('MATCH (u:User) RETURN u', () => {
    expect(c.match(c.node('u').label('User')).return('u').query()).toBe(
      'MATCH (u:User) RETURN u',
    );
  });

  it(`MATCH (u:User {name: 'John', isActive: true, age: 30}) RETURN u`, () => {
    expect(
      c
        .match(
          c
            .node('u')
            .label('User')
            .props({ name: 'John', isActive: true, age: 30 }),
        )
        .return('u')
        .query(),
    ).toBe(`MATCH (u:User {name: 'John', isActive: true, age: 30}) RETURN u`);
  });
});
