import { Clause } from '../abstracts/clause';

import { OptionalMatch } from './optional-match';

import type { Pattern } from '../abstracts/pattern';

/**
 * Match clause
 *
 * TODO: maybe we can pass just the Pattern to the Clause generic and get the name there
 *  so we don't have to repeat it for every clause extension
 */
export class Match<P extends Pattern> extends Clause<P['name']> {
  public constructor(private readonly pattern: P) {
    super();
  }

  public clone(): Match<P> {
    return new Match<P>(this.pattern);
  }

  public toQuery(): string {
    return `MATCH ${this.pattern.toQuery()}`;
  }

  public optional(): OptionalMatch<P> {
    return new OptionalMatch<P>(this);
  }
}
