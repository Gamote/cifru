import { Match } from './elements/match';
import { Node } from './elements/node';

/**
 * Starting point for the Cifru Query Builder
 */
class QueryBuilder {
  public match = Match.factory();
  public node = Node.factory();
}

export const qb = new QueryBuilder();
