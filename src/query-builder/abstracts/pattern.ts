import { Element } from './element';

import type { Alphabet, Optional } from '../type-utils';

export type ValidPatternName = `${
  | Uppercase<Alphabet>
  | Lowercase<Alphabet>}${string}`;

/**
 * Pattern
 */
export abstract class Pattern<
  Name extends Optional<ValidPatternName> = Optional<ValidPatternName>,
> extends Element<Pattern<Name>> {
  protected readonly _name: Name;
  protected readonly _labels: string[] = [];

  protected constructor(
    priorElement?: Element<Pattern<Name>> | undefined,
    name?: Name,
    labels?: string[],
  ) {
    super(priorElement);

    this._name = name;
    this._labels = labels ?? [];
  }
}
