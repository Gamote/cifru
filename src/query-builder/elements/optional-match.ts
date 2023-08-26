import { Clause } from '../abstracts/clause';

import type { Match } from './match';
import type { Pattern } from '../abstracts/pattern';

/**
 * Optional match clause
 *
 * TODO: maybe we can pass just the Pattern to the Clause generic and get the name there
 *  so we don't have to repeat it for every clause extension
 */
export class OptionalMatch<PatternType extends Pattern> extends Clause<
  PatternType['attributes']
> {
  public readonly __type = OptionalMatch.name;

  protected constructor(private readonly match: Match<PatternType>) {
    super();
  }

  /**
   * Generates a type-safe method to create an instance.
   * TODO: Should we enforce it through the Element abstract class?
   */
  static factory<PatternType extends Pattern>(match: Match<PatternType>) {
    return () => new OptionalMatch(match);
  }

  protected toAppend(): string {
    return `OPTIONAL ${this.match.query()}`;
  }
}
