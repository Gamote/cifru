import { Clause } from '../abstracts/clause';

import type { Node } from './node';

/**
 * Optional Match clause
 *
 * TODO: maybe we can pass just the Pattern to the Clause generic and get the name there
 *  so we don't have to repeat it for every clause extension
 */
export class OptionalMatch<N extends Node = Node> extends Clause<
  Node['attributes']
> {
  public readonly __type = OptionalMatch.name;

  protected constructor(private readonly node: N) {
    super();
  }

  /**
   * Generates a type-safe method to create an instance.
   * TODO: Should we enforce it through the Element abstract class?
   */
  static factory<N extends Node>(node: N) {
    return () => new OptionalMatch(node);
  }

  protected toAppend(): string {
    return `OPTIONAL MATCH ${this.node.query()}`;
  }
}
