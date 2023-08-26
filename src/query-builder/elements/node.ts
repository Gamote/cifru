import { Pattern } from '../abstracts/pattern';

import type { PatternAttributes } from '../abstracts/pattern';
import type { Exact } from '../type-utils';

/**
 * Node
 */
export class Node<
  Attributes extends PatternAttributes,
> extends Pattern<Attributes> {
  /**
   * Type-safe way to create an instance.
   *
   * TODO: Should we enforce it through the Element abstract class?
   *
   * @param attributes
   */
  static create<Attributes extends PatternAttributes>(
    // Use `Exact` to not allow extra attributes TODO: add tests to check this
    attributes?: Exact<Attributes, PatternAttributes>,
  ) {
    return new Node(undefined, attributes);
  }

  protected toAppend(): string {
    const variable = this.attributes?.variable ?? '';
    const labels = this.attributes?.labels?.length
      ? `:${this.attributes.labels.join('|')}`
      : '';

    // TODO: we should move this in a mini class utility to deal with
    //  complex properties and to offer an easy way to clone the object
    const proprieties = this.attributes?.properties
      ? ` {${Object.entries(this.attributes.properties)
          .map(([key, value]) => {
            const valueString =
              typeof value === 'string' ? `'${value}'` : String(value);

            return `${key}: ${valueString}`;
          })
          .join(', ')}}`
      : '';

    return `(${variable}${labels}${proprieties})`;
  }
}
