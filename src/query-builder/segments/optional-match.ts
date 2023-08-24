import { Clause } from '../abstracts/clause';

import type { Match } from './match';
import type { Pattern } from '../abstracts/pattern';

/**
 * Optional match clause
 */
export class OptionalMatch<P extends Pattern> extends Clause {
  public constructor(private readonly match: Match<P>) {
    super();
  }

  public clone(): OptionalMatch<P> {
    return new OptionalMatch<P>(this.match);
  }

  public generate(): string {
    return `OPTIONAL ${this.match.generate()}`;
  }
}
