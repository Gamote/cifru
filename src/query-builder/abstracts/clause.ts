import { Return } from '../elements/return';

import { Element } from './element';

import type { PatternAttributes } from './pattern';

/**
 * Clause
 */
export abstract class Clause<
  Attributes extends PatternAttributes | undefined,
> extends Element {
  // A clause cannot have a prior element as most of the time
  // the clause is the first element in the query
  protected constructor() {
    super();
  }

  // TODO: this should be revisited
  public return<
    Returnable extends string | number = string,
    Variable extends Returnable = Attributes extends PatternAttributes
      ? Attributes['variable'] extends string
        ? Attributes['variable']
        : Returnable
      : Returnable,
    Iba extends Variable = Variable,
  >(variable: Iba): Return<Variable> {
    return new Return<Variable>(this, variable);
  }
}
