import { it, describe, expect } from 'vitest';

import { qb } from '../src';

describe('Integration tests', () => {
  it('MATCH ()', () => {
    expect(qb.match(qb.node()).query()).toBe('MATCH ()');
  });

  it('OPTIONAL MATCH ()', () => {
    expect(qb.match(qb.node()).optional().query()).toBe('OPTIONAL MATCH ()');
  });

  it('MATCH (u)', () => {
    expect(qb.match(qb.node('u')).query()).toBe('MATCH (u)');
  });

  it('MATCH (:User)', () => {
    expect(qb.match(qb.node().label('User')).query()).toBe('MATCH (:User)');
  });

  it('MATCH (u:User)', () => {
    expect(qb.match(qb.node('u').label('User')).query()).toBe('MATCH (u:User)');
  });

  it('MATCH (u:Provider|Client)', () => {
    expect(
      qb.match(qb.node('u').label('Provider').label('Client')).query(),
    ).toBe('MATCH (u:Provider|Client)');
  });

  it('MATCH (u:User|Group|Post)', () => {
    expect(qb.match(qb.node('u').labels('User', 'Group', 'Post')).query()).toBe(
      'MATCH (u:User|Group|Post)',
    );
  });

  it('After cloning: (u:Like|Comment|Image)', () => {
    const userNode = qb.node('u');
    userNode.label('user');
    userNode.labels('group', 'post');

    const finalPattern = userNode.labels('Like', 'Comment', 'Image');

    expect(finalPattern.generate()).toBe('(u:Like|Comment|Image)');
  });

  it('MATCH (u:User) RETURN', () => {
    expect(qb.match(qb.node('u').label('User')).return().query()).toBe(
      'MATCH (u:User) RETURN',
    );
  });
});
