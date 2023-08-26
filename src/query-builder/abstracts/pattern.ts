import { Element } from './element';

import type { Alphabet, Exact, Optional } from '../type-utils';

// TODO: find a better name for this type
export type ValidPatternName = `${
  | Uppercase<Alphabet>
  | Lowercase<Alphabet>}${string}`;

export type PatternAttributes<
  Variable extends Optional<ValidPatternName> = Optional<ValidPatternName>,
> = {
  variable?: Variable;
  labels?: string[];
  // TODO: make this a type, also generic, check the restrictions on the value type and the keys should start with a letter
  properties?: Record<string, string | number | boolean>;
};

/**
 * Pattern
 */
export abstract class Pattern<
  Attributes extends PatternAttributes = PatternAttributes,
> extends Element {
  public readonly attributes?: Attributes;

  protected constructor(
    priorElement?: Element,
    // Use `Exact` to not allow extra attributes TODO: add tests to check this
    attributes?: Exact<Attributes, PatternAttributes>,
  ) {
    super(priorElement);

    this.attributes = attributes;
  }
}
