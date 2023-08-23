import { QueryStartSegment } from '../abstracts/query-start-segment';

import { Node } from './node';

export type MatchOptions = {
  optional?: boolean;
};

/**
 * Match segment
 */
export class Match extends QueryStartSegment {
  public constructor(private readonly options?: MatchOptions) {
    super();
  }

  protected clone(): Match {
    return new Match(this.options);
  }

  public generate(): string {
    return `${this.options?.optional ? 'OPTIONAL ' : ''}MATCH`;
  }

  public node(name?: string): Node {
    return new Node(this.commit(), name);
  }
}
