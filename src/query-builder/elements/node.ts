import { Pattern } from '../abstracts/pattern';

import { Relation } from './relation';

import type { PatternAttributes } from '../abstracts/pattern';
import type { ValidateShape } from '../type-utils';

/**
 * Node
 */
export class Node<
  Attributes extends PatternAttributes = PatternAttributes,
> extends Pattern<Attributes> {
  public readonly __type = Node.name;

  /**
   * Generates a type-safe method to create an instance.
   * TODO: Should we enforce it through the Element abstract class?
   *
   * @param priorElement
   */
  static factory(priorElement?: Pattern) {
    return <Attributes extends PatternAttributes>(
      // Use `Exact` to not allow extra attributes TODO: add tests to check this
      attributes?: ValidateShape<Attributes, PatternAttributes>,
    ) => new Node(priorElement, attributes);
  }

  protected toAppend(): string {
    // Show the relation as undirected if the prior element is a node (e.g. (n)--(m))
    const undirectedRelation =
      this.priorElement?.__type === Node.name ? '--' : '';

    return `${undirectedRelation}(${super.toAppend()})`;
  }

  public node = Node.factory(this);

  public relation = Relation.factory(this);
}
