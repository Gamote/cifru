import { Pattern } from '../abstracts/pattern';

import type { Element } from '../abstracts/element';

/**
 * Node
 */
export class Node extends Pattern {
  public constructor(
    priorElement?: Element<Pattern>,
    name?: string,
    labels?: string[],
  ) {
    super(priorElement, name, labels);
  }

  public clone(): Node {
    return new Node(this.priorElement, this._name, [...this._labels]);
  }

  public toQuery(): string {
    const name = this._name ? this._name : '';
    const labels = this._labels.length ? `:${this._labels.join('|')}` : '';
    return `(${name}${labels})`;
  }

  public labels(...labels: string[]): Node {
    const next = this.clone();
    next._labels.push(...labels);
    return next;
  }

  public label(label: string): Node {
    return this.labels(label);
  }
}
