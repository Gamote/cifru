import { Query } from './query';

/**
 * Pattern
 */
export abstract class Pattern extends Query<Pattern> {
  protected readonly _name?: string;
  protected readonly _labels: string[] = [];

  protected constructor(query?: Query, name?: string, labels?: string[]) {
    super(query);

    this._name = name;
    this._labels = labels ?? [];
  }
}
