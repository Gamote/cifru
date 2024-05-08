import { Pattern } from './query-builder/abstracts/pattern';
import { Node } from './query-builder/elements/node';
import { Relation } from './query-builder/elements/relation';

import c, { Direction } from './index';

const dev = () => {
  console.log('==================================');
  console.log('==> PLAYGROUND <==================');
  console.log('==================================');

  const query = c
    .match(
      c
        .node({
          // left: '<', // should fail
          variable: 'a',
          labels: ['Actor'],
          properties: { name: 'Cami' },
          // where: { deletedAt: null },
        })
        .relation({
          // left: '<', // should fail
          direction: Direction.Outgoing,
          variable: 'r',
          labels: ['ACTED_IN'],
          // properties: { roles: ['Trinity'] },
          // where: { roles: ['Trinity'] },
        })
        .node({
          // left: '<', // should fail
          variable: 'm',
          labels: ['Movie'],
          properties: { name: 'The Matrix' },
          // where: { deletedAt: null },
        }),
    )
    .optional()
    // .where({ u: { isActive: true } })
    .return('error') // TODO: for free strings we should introduce the `raw` function, so we can do `return(raw('anything'))`
    .query();

  console.log(query);
};

void dev();

// export class Transporter<Value extends string | undefined = undefined> {
//   public readonly value: Value;
//
//   constructor(value: Value);
//   constructor(value?: undefined);
//   constructor(value?: Value) {
//     if (value === undefined) {
//       // We're casting `undefined as Value` here because TypeScript doesn't allow assigning the `undefined` that is coming from the `?` operator to a type parameter.
//       // This is safe in this context because of our constructor's type definition and the surrounding conditionals.
//       // We already expect that `Value` can be `undefined`, as specified in the generic type constraint.
//
//       this.value = undefined as Value;
//     } else {
//       this.value = value;
//     }
//   }
// }
//
// const a = new Transporter('a');
// const aa = a.value; // Should be of type "a"
//
// const b = new Transporter();
// const bb = b.value; // Should be of type `undefined`

// const a = c.node();
//
// const aa = a.attributes.labels;
//
// const b = c.node({
//   // left: '<', // should fail
//   variable: 'a',
//   // labels: ['Actor'],
//   // properties: { name: 'Cami' },
//   // where: { deletedAt: null },
// });
//
// const bb = b.attributes.variable;

// Valid
const a0 = new Node(undefined);
const a3 = new Node(undefined, { variable: 'AA' });
const a13 = new Node(undefined, { variable: 'OAA' });
const a14 = new Relation(undefined, {
  variable: 'OAA',
  direction: Direction.Outgoing,
});

const aa0 = a0.attributes; // should be `undefined`
const aa3 = a3.attributes.variable; // should be "AA"
const aa13 = a13.attributes.variable; // should be "OAA"
const aa14 = a13.attributes.direction; // should be "Outgoing"

// Errors
const a1 = new Node(undefined, undefined);
const a22 = new Node(undefined, { shop: '' });
const a2 = new Node(undefined, {});
const a5 = new Node(undefined, { variable: '1AA' });
const a4 = new Node(undefined, { ...({} as Record<string, unknown>) });

const aa1 = a1.attributes.labels; // should fail
const aa22 = a22.attributes.shop; // should fail
const aa2 = a2.attributes.variable; // should fail
const aa5 = a5.attributes.variable; // should fail
const aa4 = a4.attributes.variable; // should be unknown

const irstr = new Pattern(undefined);
const stis = new Pattern(undefined, { variable: 'a' });

const ba = irstr.attributes;
const ba4 = stis.attributes.variable;
