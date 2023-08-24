import { Match } from './segments/match';
import { Node } from './segments/node';

import type { Pattern } from './abstracts/pattern';

/**
 * Starting point for the Cifru Query Builder
 * TODO: should we use a class somehow? (e.g. `new CifruQueryBuilder()`)
 */
export const qb = {
  match: <P extends Pattern>(pattern: P): Match<P> => new Match<P>(pattern),
  node: (name?: string): Node => new Node(undefined, name),
};
