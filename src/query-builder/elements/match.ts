import { Clause } from '../abstracts/clause';

import { OptionalMatch } from './optional-match';

import type { Node } from './node';

/**
 * Match clause
 *
 * TODO: maybe we can pass just the Pattern to the Clause generic and get the name there
 *  so we don't have to repeat it for every clause extension
 */
export class Match<N extends Node = Node> extends Clause<N['attributes']> {
  public readonly __type = Match.name;
  public readonly node: N;

  protected constructor(node: N) {
    super();

    this.node = node;
  }

  /**
   * Generates a type-safe method to create an instance.
   * TODO: Should we enforce it through the Element abstract class?
   */
  static factory() {
    return <N extends Node>(node: N) => new Match(node);
  }

  protected toAppend(): string {
    return `MATCH ${this.node.query()}`;
  }

  public optional() {
    return OptionalMatch.factory(this.node)();
  }
}
