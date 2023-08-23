// TODO: should we add classes for objects and then use them when we instantiate the class for better type checking?
//  Or, should we be able do it but not force it? and by default like Zod?
//  Basically, should we go into the full ORM arena? Handling database connections, transactions, etc?
//  Or should we just provide a simple query builder that can be used to build queries and then execute them?
// TODO: create an error library that we can use to throw errors with custom codes and messages that are Google friendly
import { qb } from './index';

const dev = () => {
  console.log('==================================');
  console.log('==> CHECKS <======================');
  console.log('==================================');

  // "MATCH" - TODO: Query will fail: Expected "("
  console.log('#1 -', qb.match().query());

  // "OPTIONAL MATCH" - TODO: Query will fail: Expected "("
  console.log('#2 -', qb.match({ optional: true }).query());

  // "MATCH ()" - TODO: Query will fail: Missing RETURN or others
  console.log('#3 -', qb.match().node().query());

  // "MATCH (u)" - TODO: Query will fail: Missing RETURN or others
  console.log('#4 -', qb.match().node('u').query());

  // "MATCH (:user)" - TODO: Query will fail: Missing RETURN or others
  console.log('#5 -', qb.match().node().label('user').query());

  // "MATCH (u:user)" - TODO: Query will fail: Missing RETURN or others
  console.log('#6 -', qb.match().node('u').label('user').query());

  // "MATCH (u:user|admin)" - TODO: Query will fail: Missing RETURN or others
  console.log(
    '#7 -',
    qb.match().node('u').label('user').label('admin').query(),
  );

  // " MATCH (u:user|group|post)" - TODO: Query will fail: Missing RETURN or others
  console.log(
    '#8 -',
    qb.match().node('u').labels(['user', 'group', 'post']).query(),
  );

  // " MATCH (u:user|group|post)" - TODO: Query will fail: Missing RETURN or others
  const userNode = qb.match().node('u');
  userNode.label('user'); // TODO: should not show without commit, or?

  console.log('#8 -', userNode.labels(['like', 'comment', 'image']).query());

  // " MATCH (u:user|group|post) RETURN" - TODO: Query will fail: with?
  console.log('#9 -', qb.match().node('u').label('user').return().query());

  console.log('==================================');
  console.log('==> PLAYGROUND <==================');
  console.log('==================================');

  // ...
};

void dev();
