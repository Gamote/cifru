import { CloneableElement } from './element';

import type { Element } from './element';
import type { Alphabet, Optional } from '../type-utils';

export type ValidPatternName = `${
  | Uppercase<Alphabet>
  | Lowercase<Alphabet>}${string}`;

/**
 * This is a workaround to avoid circular dependencies when we are trying
 * to use `Pattern` as a default type for the generic type parameter `Type`
 * found in the `Pattern` class.
 *
 * TODO: Consider revisiting this with future TypeScript versions.
 */
export type PatternInterface = Pattern;

/**
 * Pattern
 */
export abstract class Pattern<
  Type extends PatternInterface = PatternInterface,
  Name extends Optional<ValidPatternName> = Optional<ValidPatternName>,
> extends CloneableElement<Type> {
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

  public labels(...labels: string[]) {
    const next = this.clone();
    next.labelList.push(...labels);
    return next;
  }

  public label(label: string) {
    return this.labels(label);
  }
}
