/**
 * Element
 *
 * This class is used as a base for all elements in the query builder.
 * It provides the basic functionality that all elements should have.
 */
export abstract class Element<T> {
  protected readonly priorElement?: Element<T>;

  protected constructor(priorElement?: Element<T>) {
    this.priorElement = priorElement;
  }

  /**
   * Returns the full cypher query
   */
  public query(): string {
    const priorQuery = this.priorElement?.query() ?? '';
    return priorQuery + this.toQuery();
  }

  public abstract clone(): Element<T>;

  /**
   * Returns **ONLY** the cypher of the element is called on.
   *
   * If you want the full query, use `query()` instead.
   */
  public abstract toQuery(): string; // TODO: should not be public! as the user might confuse it with `query()`
}
