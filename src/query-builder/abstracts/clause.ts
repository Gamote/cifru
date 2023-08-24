import { Return } from '../elements/return';

import { Element } from './element';

/**
 * Clause
 */
export abstract class Clause extends Element<Clause> {
  // A clause cannot have an initial query as most of the time
  // the clause is the first element in the query
  protected constructor() {
    super();
  }

  public return(): Return<Clause> {
    return new Return<Clause>(this);
  }
}
