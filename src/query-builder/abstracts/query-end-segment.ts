import { QueryBaseSegment } from './query-base-segment';

/**
 * Query end segment
 *
 * This class can be used to create query segments that can return runnable queries.
 *
 * The difference between this class and the base is that classes that extend this class
 * are considered finalized and can return runnable queries.
 */
export abstract class QueryEndSegment extends QueryBaseSegment {
  protected constructor(readonly parentSegment: QueryBaseSegment) {
    super(parentSegment);
  }
}
