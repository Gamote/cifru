import { Pattern } from '../abstracts/pattern';

import type { Query } from '../abstracts/query';

/**
 * Node
 */
export class Node extends Pattern {
  // TODO: we should have a type that can prefix a `Pattern`
  public constructor(query?: Query, name?: string, labels?: string[]) {
    super(query, name, labels);
  }

  public clone(): Node {
    return new Node(this, this._name, [...this._labels]);
  }

  public generate(): string {
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
