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

  it('MATCH (:user)', () => {
    expect(qb.match(qb.node().label('user')).query()).toBe('MATCH (:user)');
  });

  it('MATCH (u:user)', () => {
    expect(qb.match(qb.node('u').label('user')).query()).toBe('MATCH (u:user)');
  });

  it('MATCH (u:user|admin)', () => {
    expect(qb.match(qb.node('u').label('user').label('admin')).query()).toBe(
      'MATCH (u:user|admin)',
    );
  });

  it('MATCH (u:user|group|post)', () => {
    expect(
      qb.match(qb.node('u').labels(['user', 'group', 'post'])).query(),
    ).toBe('MATCH (u:user|group|post)');
  });

  it('After cloning: (u:like|comment|image)', () => {
    const userNode = qb.node('u');
    userNode.label('user');
    userNode.labels(['group']);

    const finalPattern = userNode.labels(['like', 'comment', 'image']);

    expect(finalPattern.generate()).toBe('(u:like|comment|image)');
  });

  it('MATCH (u:user) RETURN', () => {
    expect(qb.match(qb.node('u').label('user')).return().query()).toBe(
      'MATCH (u:user) RETURN',
    );
  });
});
