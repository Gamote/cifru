import { QueryBaseSegment } from './query-base-segment';

/**
 * Query start segment
 *
 * This class can be extended to create query segments that can be used as the starting point of queries.
 *
 * The difference between this class and the base is that classes that extend this class
 * can choose not to provide a context and the class will automatically create one.
 */
export abstract class QueryStartSegment extends QueryBaseSegment {
  protected constructor() {
    super();
  }
}
