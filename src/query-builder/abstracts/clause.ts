import { Return } from '../elements/return';

import { Element } from './element';

import type { ValidPatternName } from './pattern';
import type { Optional } from '../type-utils';

/**
 * Clause
 */
export abstract class Clause<
  ReturnProps extends Optional<ValidPatternName>,
> extends Element {
  // A clause cannot have a prior element as most of the time
  // the clause is the first element in the query
  protected constructor() {
    super();
  }

  public return(
    props: Exclude<ReturnProps, undefined>,
  ): Return<Exclude<ReturnProps, undefined>> {
    return new Return<Exclude<ReturnProps, undefined>>(this, props);
  }
}
