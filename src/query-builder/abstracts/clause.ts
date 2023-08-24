import { Return } from '../segments/return';

import { Query } from './query';

/**
 * Clause
 */
export abstract class Clause extends Query<Clause> {
  // A clause cannot have an initial query as most of the time
  // the clause is the first element in the query
  protected constructor() {
    super();
  }

  public return(): Return {
    return new Return(this);
  }
}
