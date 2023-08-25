import { Match } from './elements/match';
import { Node } from './elements/node';

/**
 * Starting point for the Cifru Query Builder
 */
class QueryBuilder {
  public match = Match.create.bind(Match);
  public node = Node.create.bind(Node);
}

export const qb = new QueryBuilder();
