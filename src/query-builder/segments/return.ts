import { Query } from '../abstracts/query';

/**
 * Return
 */
export class Return extends Query<Return> {
  // TODO: We should have a type that is returnable
  public constructor(query: Query) {
    super(query);
  }

  public clone(): Return {
    return new Return(this);
  }

  public generate(): string {
    return ` RETURN`;
  }
}
