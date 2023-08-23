/**
 * Query base segment
 *
 * This class can be used to create query segments that can be used in the queries
 * It is also used to provide a common base for the start and end segments.
 */
export abstract class QueryBaseSegment {
  private readonly _query: string = '';
  private _isCommitted = false;

  protected constructor(readonly parentSegment?: QueryBaseSegment) {
    // TODO: can we do the parent required?
    if (parentSegment) {
      if (parentSegment._isCommitted) {
        this._query = parentSegment._query + parentSegment.generate();
      } else {
        this._query = parentSegment._query;
      }
    }
  }

  public query(): string {
    return this._query + this.generate();
  }

  /**
   * This method sets `_isCommitted` which indicates that whenever someone is adding on top of this segment
   * the `generate()`'s output can be appended to the query.
   *
   * For example: If this segment is cloned by the same segment (like `Node.labels()`)  we are not ready to write
   * those changes to the query because a subsequent call to `labels()` will add a new node together with the label
   * instead of appending it to the existing one. On the other hand, if the current instance (or a clone of it for that matter)
   * is passed to an external class (like `Return`) then we might want to commit the changes so `Return` can add changes on top
   * and not overwrite the ones made by `Node`.
   * @protected
   */
  protected commit(): this {
    this._isCommitted = true;
    return this;
  }

  protected abstract clone(): QueryBaseSegment;

  public abstract generate(): string;
}
