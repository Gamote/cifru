import { Match } from './elements/match';
import { Node } from './elements/node';

import type { Pattern } from './abstracts/pattern';

/**
 * Starting point for the Cifru Query Builder
 * TODO: should we use a class somehow? (e.g. `new QueryBuilder()`)
 */
export const qb = {
  match: <P extends Pattern>(pattern: P) => new Match<P>(pattern),
  node: (name?: string): Node => new Node(undefined, name),
};
