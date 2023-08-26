/**
 * Element
 *
 * This class is used as a base for all elements in the query builder.
 * It provides the basic functionality that all elements should have.
 */
export abstract class Element {
  protected readonly priorElement?: Element;

  protected constructor(priorElement?: Element) {
    this.priorElement = priorElement;
  }

  /**
   * Returns the full cypher query
   */
  public query(): string {
    const priorQuery = this.priorElement?.query() ?? '';
    return priorQuery + this.toQuery();
  }

  /**
   * Returns **ONLY** the cypher of the element is called on.
   *
   * If you want the full query, use `query()` instead.
   *
   * TODO: Find a better name for this method to differentiate it from `query()`
   */
  protected abstract toQuery(): string;
}

/**
 * Cloneable element
 *
 * This provides instructions on a typed clone method of an element.
 */
export abstract class CloneableElement<T extends Element> extends Element {
  public abstract clone(): T;
}
