import { Pattern } from '../abstracts/pattern';

import type { ValidPatternName } from '../abstracts/pattern';
import type { Optional } from '../type-utils';

/**
 * Node
 */
export class Node<Name extends Optional<ValidPatternName>> extends Pattern<
  Node<Name>,
  Name
> {
  /**
   * Type-safe way to create an instance.
   *
   * TODO: Should we enforce it through the Element abstract class?
   *
   * @param name
   */
  static create<Name extends Optional<ValidPatternName>>(name?: Name) {
    return new Node<Name>(undefined, name);
  }

  public clone() {
    return new Node(
      this.priorElement,
      this.name,
      [...this.labelList],
      // TODO: we should clone this too
      this.properties ? { ...this.properties } : undefined,
    );
  }

  protected toQuery(): string {
    const name = this.name ? this.name : '';
    const labels = this.labelList.length ? `:${this.labelList.join('|')}` : '';

    // TODO: we should move this in a mini class utility to deal with
    //  complex properties and to offer an easy way to clone the object
    const proprieties = this.properties
      ? ` {${Object.entries(this.properties)
          .map(([key, value]) => {
            const valueString =
              typeof value === 'string' ? `'${value}'` : String(value);

            return `${key}: ${valueString}`;
          })
          .join(', ')}}`
      : '';

    return `(${name}${labels}${proprieties})`;
  }
}
