import { QueryBaseSegment } from '../abstracts/query-base-segment';

import { Return } from './return';

/**
 * Node
 */
export class Node extends QueryBaseSegment {
  private readonly _name: string | undefined;
  private readonly _labels: string[] = [];

  public constructor(
    readonly parentSegment: QueryBaseSegment,
    readonly name?: string,
  ) {
    super(parentSegment);

    this._name = name;
  }

  protected clone(): Node {
    return new Node(this, this._name);
  }

  public generate(): string {
    const name = this._name ? this._name : '';
    const labels = this._labels.length ? `:${this._labels.join('|')}` : '';
    return ` (${name}${labels})`;
  }

  public label(name: string): Node {
    const next = this.clone();
    next._labels.push(name);
    return next;
  }

  public labels(names: string[]): Node {
    const next = this.clone();
    next._labels.push(...names);
    return next;
  }

  public return(): Return {
    return new Return(this.commit());
  }
}
