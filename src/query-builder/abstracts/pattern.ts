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
  public readonly name: Name;
  public readonly labelList: string[];

  protected constructor(
    priorElement?: Element | undefined,
    name?: Name,
    labels?: string[],
  ) {
    super(priorElement);

    // We are using a type assertion here to satisfy TypeScript's strict type checking.
    // The problem arises because `name` is an optional parameter that can be `undefined`,
    // while `this._name` is of type `Name`. TypeScript's type system cannot guarantee that
    // `Name` can safely accept `undefined` even though we understand that it should be
    // acceptable in our use case.
    // Using the type assertion `(undefined as Name)` here is a temporary workaround to
    // bypass the error.
    // TODO: Consider revisiting this with future TypeScript versions or design changes to avoid type casting.
    this.name = name ?? (undefined as Name);
    this.labelList = labels ?? [];
  }
}
