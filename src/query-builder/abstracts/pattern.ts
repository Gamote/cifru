import { Element } from './element';

import type { Alphabet, Exact, Optional } from '../type-utils';

// TODO: find a better name for this type
// TODO: we need to add more stuff here like "_" - check the docs
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
  public abstract readonly __type: string;
  public readonly attributes?: Attributes;

  protected constructor(
    priorElement?: Pattern,
    // Use `Exact` to not allow extra attributes TODO: add tests to check this
    attributes?: Exact<Attributes, PatternAttributes>,
  ) {
    super(priorElement);

    this.attributes = attributes;
  }

  protected toAppend(): string {
    const variable = this.attributes?.variable ?? '';
    const labels = this.attributes?.labels?.length
      ? `:${this.attributes.labels.join('|')}`
      : '';

    const space = variable || labels ? ' ' : '';

    // TODO: we should move this in a mini class utility to deal with
    //  complex properties and to offer an easy way to clone the object
    const proprieties = this.attributes?.properties
      ? `${space}{${Object.entries(this.attributes.properties)
          .map(([key, value]) => {
            const valueString =
              typeof value === 'string' ? `'${value}'` : String(value);

            return `${key}: ${valueString}`;
          })
          .join(', ')}}`
      : '';

    return `${variable}${labels}${proprieties}`;
  }
}
