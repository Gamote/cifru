// TODO: should we add classes for objects and then use them when we instantiate the class for better type checking?
//  Or, should we be able do it but not force it? and by default like Zod?
//  Basically, should we go into the full ORM arena? Handling database connections, transactions, etc?
//  Or should we just provide a simple query builder that can be used to build queries and then execute them?
// TODO: create an error library that we can use to throw errors with custom codes and messages that are Google friendly
// TODO: no duplicated Node names, or return statements and stuff like that

import c from './index';

const dev = () => {
  console.log('==================================');
  console.log('==> PLAYGROUND <==================');
  console.log('==================================');

  const query = c
    .match(
      c
        .node('u')
        .labels('Actor', 'Musician')
        .props({ name: 'Cami', isActive: true, age: 30 }),
    )
    .return('u')
    .query();

  console.log(query);
};

void dev();
