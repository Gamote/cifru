import { QueryEndSegment } from '../abstracts/query-end-segment';

import type { QueryBaseSegment } from '../abstracts/query-base-segment';

export type ReturnOptions = {
  // ...
};

/**
 * Return segment
 */
export class Return extends QueryEndSegment {
  public constructor(
    readonly parentSegment: QueryBaseSegment,
    private readonly options?: ReturnOptions,
  ) {
    super(parentSegment);
  }

  protected clone(): Return {
    return new Return(this, this.options);
  }

  public generate(): string {
    return ` RETURN`;
  }
}
