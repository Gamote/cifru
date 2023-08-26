/**
 * Element
 *
 * This class is used as a base for all elements in the query builder.
 * It provides the basic functionality that all elements should have.
 */
export abstract class Element {
  public abstract readonly __type: string;
  protected readonly priorElement?: Element;

  protected constructor(priorElement?: Element) {
    this.priorElement = priorElement;
  }

  /**
   * Returns the full cypher query
   */
  public query(): string {
    const priorQuery = this.priorElement?.query() ?? '';
    return priorQuery + this.toAppend();
  }

  /**
   * Returns **ONLY** the cypher query of the element is called on.
   * If you want the full query, use `query()` instead.
   */
  protected abstract toAppend(): string;
}
