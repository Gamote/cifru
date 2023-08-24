/**
 * Query base
 *
 * This class can be used to create query elements that can be used in the queries
 */
export abstract class Query<T = unknown> {
  // TODO: Is there a better name for this?
  private readonly initialQuery: string = '';

  protected constructor(initialQuery?: Query<T>) {
    if (initialQuery) {
      this.initialQuery = initialQuery.query();
    }
  }

  public query(): string {
    return this.initialQuery + this.generate();
  }

  public abstract clone(): Query<T>;

  public abstract generate(): string;
}
