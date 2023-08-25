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
  public constructor(priorElement?: Element, name?: Name, labels?: string[]) {
    super(priorElement, name, labels);
  }

  public clone() {
    return new Node(this.priorElement, this.name, [...this.labelList]);
  }

  public toQuery(): string {
    const name = this.name ? this.name : '';
    const labels = this.labelList.length ? `:${this.labelList.join('|')}` : '';
    return `(${name}${labels})`;
  }

  public labels(...labels: string[]): Node<Name> {
    const next = this.clone();
    next.labelList.push(...labels);
    return next;
  }

  public label(label: string): Node<Name> {
    return this.labels(label);
  }
}
