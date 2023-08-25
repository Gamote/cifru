import { Pattern } from '../abstracts/pattern';

import type { Element } from '../abstracts/element';
import type { ValidPatternName } from '../abstracts/pattern';
import type { Optional } from '../type-utils';

/**
 * Node
 */
export class Node<Name extends Optional<ValidPatternName>> extends Pattern<
  Node<Name>,
  Name
> {
  public constructor(priorElement?: Element, name?: Name, labels?: string[]) {
    super(priorElement, name, labels);
  }

  /**
   * Type-safe way to create a `Node` instance.
   *
   * TODO: Should we enforce it through the Element abstract class?
   *
   * @param name
   */
  static create<Name extends Optional<ValidPatternName>>(name?: Name) {
    return new Node<Name>(undefined, name);
  }

  public clone() {
    return new Node(this.priorElement, this.name, [...this.labelList]);
  }

  public toQuery(): string {
    const name = this.name ? this.name : '';
    const labels = this.labelList.length ? `:${this.labelList.join('|')}` : '';
    return `(${name}${labels})`;
  }
}
