import { CloneableElement } from './element';

import type { Element } from './element';
import type { Alphabet, Optional } from '../type-utils';

export type ValidPatternName = `${
  | Uppercase<Alphabet>
  | Lowercase<Alphabet>}${string}`;

/**
 * Pattern
 */
export abstract class Pattern<
  Name extends Optional<ValidPatternName> = Optional<ValidPatternName>,
> extends CloneableElement<Pattern<Name>> {
  public readonly name?: Name;
  public readonly labelList: string[];

  protected constructor(
    priorElement?: Element | undefined,
    name?: Name,
    labels?: string[],
  ) {
    super(priorElement);

    this.name = name;
    this.labelList = labels ?? [];
  }
}
