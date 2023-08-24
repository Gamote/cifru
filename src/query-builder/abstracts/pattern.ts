import { Element } from './element';

/**
 * Pattern
 */
export abstract class Pattern extends Element<Pattern> {
  protected readonly _name?: string;
  protected readonly _labels: string[] = [];

  protected constructor(
    priorElement?: Element<Pattern>,
    name?: string,
    labels?: string[],
  ) {
    super(priorElement);

    this._name = name;
    this._labels = labels ?? [];
  }
}
