import { Clause } from '../abstracts/clause';

import { OptionalMatch } from './optional-match';

import type { Pattern } from '../abstracts/pattern';

/**
 * Match clause
 */
export class Match<P extends Pattern> extends Clause {
  public constructor(private readonly pattern: P) {
    super();
  }

  public clone(): Match<P> {
    return new Match<P>(this.pattern);
  }

  public generate(): string {
    return `MATCH ${this.pattern.generate()}`;
  }

  public optional(): OptionalMatch<P> {
    return new OptionalMatch<P>(this);
  }
}
