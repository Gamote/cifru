import { Clause } from '../abstracts/clause';

import type { Match } from './match';
import type { Pattern } from '../abstracts/pattern';

/**
 * Optional match clause
 *
 * TODO: maybe we can pass just the Pattern to the Clause generic and get the name there
 *  so we don't have to repeat it for every clause extension
 */
export class OptionalMatch<P extends Pattern> extends Clause<P['attributes']> {
  public constructor(private readonly match: Match<P>) {
    super();
  }

  public clone(): OptionalMatch<P> {
    return new OptionalMatch<P>(this.match);
  }

  protected toAppend(): string {
    return `OPTIONAL ${this.match.query()}`;
  }
}
