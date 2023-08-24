import { Match } from './elements/match';
import { Node } from './elements/node';

import type { ValidPatternName, Pattern } from './abstracts/pattern';
import type { Optional } from './type-utils';

/**
 * Starting point for the Cifru Query Builder
 * TODO: should we use a class somehow? (e.g. `new QueryBuilder()`)
 */
export const qb = {
  match: <P extends Pattern>(pattern: P) => new Match<P>(pattern),
  node: <N extends Optional<ValidPatternName> = undefined>(name?: N) =>
    new Node(undefined, name),
};
