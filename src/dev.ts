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

  // const i = c.node({
  //   name: 'u',
  //   labels: ['Actor'],
  //   properties: { name: 'Cami' },
  //   // where: { deletedAt: null },
  // });

  const query = c
    .match(
      c.node({
        variable: 'u2',
        labels: ['Actor'],
        properties: { name: 'Cami' },
        // where: { deletedAt: null },
      }),
      // .relation({
      //   labels: ['ACTED_IN'],
      //   where: { roles: ['Trinity'] },
      // })
      // .node({
      //   name: 'm',
      //   labels: ['Movie'],
      //   properties: { year: 1999 },
      //   where: { deletedAt: null },
      // }),
    )
    // .where({ u: { isActive: true } })
    .return('u') // TODO: for free strings we should introduce the `raw` function, so we can do `return(raw('anything'))`
    .query();
  // => MATCH (u:Actor {name: 'Cami'} WHERE u.deletedAt IS NULL)-[:ACTED_IN {roles: ['Trinity']}]-(m:Movie {year: 1999} WHERE m.deletedAt IS NULL)
  //    WHERE u.isActive=true
  //    RETURN u

  console.log(query);
};

void dev();
