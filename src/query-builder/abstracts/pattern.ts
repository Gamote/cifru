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
  // TODO: make this a type, also generic, check the restrictions on the value type and the keys should start with a letter
  private _properties?: Record<string, string | number | boolean>;

  protected constructor(
    priorElement?: Element,
    name?: Name,
    labels?: string[],
    properties?: Record<string, string | number | boolean>,
  ) {
    super(priorElement);

    this.name = name;
    this.labelList = labels ?? [];
    this.properties = properties;
  }

  public get properties() {
    return this._properties;
  }

  private set properties(
    properties: Record<string, string | number | boolean> | undefined,
  ) {
    this._properties = properties;
  }

  public labels(...labels: string[]) {
    const next = this.clone();
    next.labelList.push(...labels);
    return next;
  }

  public label(label: string) {
    return this.labels(label);
  }

  public props(props?: Record<string, string | number | boolean>) {
    const next = this.clone();
    next._properties = { ...props };
    return next;
  }
}
