import { Match } from './segments/match';

import type { MatchOptions } from './segments/match';

/**
 * Starting point for the Cifru Query Builder
 * TODO: should we use a class somehow? (e.g. `new CifruQueryBuilder()`)
 */
export const qb = {
  match: (options?: MatchOptions): Match => new Match(options),
};
