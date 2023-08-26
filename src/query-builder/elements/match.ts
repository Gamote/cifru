import { Clause } from '../abstracts/clause';

import { OptionalMatch } from './optional-match';

import type { Pattern } from '../abstracts/pattern';

/**
 * Match clause
 *
 * TODO: maybe we can pass just the Pattern to the Clause generic and get the name there
 *  so we don't have to repeat it for every clause extension
 */
export class Match<PatternType extends Pattern> extends Clause<
  PatternType['attributes']
> {
  public readonly __type = Match.name;

  protected constructor(private readonly pattern: PatternType) {
    super();
  }

  /**
   * Generates a type-safe method to create an instance.
   * TODO: Should we enforce it through the Element abstract class?
   */
  static factory() {
    return <PatternType extends Pattern>(pattern: PatternType) => {
      // return new Match(new Clause(...)); // TODO: this should fail
      return new Match(pattern);
    };
  }

  protected toAppend(): string {
    return `MATCH ${this.pattern.query()}`;
  }

  public optional = OptionalMatch.factory(this);
}
