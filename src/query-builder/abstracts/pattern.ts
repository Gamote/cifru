import isObject from '../../utils/is-object';

import { Element } from './element';

import type { Alphabet, ExactShape, Optional } from '../type-utils';

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

type Default = {
  variable: undefined;
  labels: undefined;
  properties: undefined;
};

type WithDefault<Input, Default> = Omit<Default, keyof Input> & Input;

/**
 * Pattern
 */
export class Pattern<
  Attributes extends PatternAttributes | undefined = undefined,
> extends Element {
  public readonly __type: string = Pattern.name;
  public readonly attributes: Attributes extends PatternAttributes
    ? WithDefault<Attributes, Default>
    : Default;

  constructor(
    priorElement: Pattern | undefined,
    attributes?: ExactShape<Attributes, PatternAttributes>,
  ) {
    super(priorElement);

    this.attributes = this.validate(attributes);
  }

  validate(
    attributes?: ExactShape<Attributes, PatternAttributes>,
  ): typeof this.attributes {
    const validate = ()

    return attributes;
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
