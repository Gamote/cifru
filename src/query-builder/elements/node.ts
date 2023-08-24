import { Pattern } from '../abstracts/pattern';

import type { Element } from '../abstracts/element';
import type { ValidPatternName } from '../abstracts/pattern';
import type { Optional } from '../type-utils';

/**
 * Node
 */
export class Node<
  Name extends Optional<ValidPatternName> = Optional<ValidPatternName>,
> extends Pattern<Name> {
  public constructor(
    priorElement?: Element<Pattern<Name>> | undefined,
    name?: Name,
    labels?: string[],
  ) {
    super(priorElement, name, labels);
  }

  public clone(): Node<Name> {
    return new Node(this.priorElement, this._name, [...this._labels]);
  }

  public toQuery(): string {
    const name = this._name ? this._name : '';
    const labels = this._labels.length ? `:${this._labels.join('|')}` : '';
    return `(${name}${labels})`;
  }

  public labels(...labels: string[]): Node<Name> {
    const next = this.clone();
    next._labels.push(...labels);
    return next;
  }

  public label(label: string): Node<Name> {
    return this.labels(label);
  }
}
