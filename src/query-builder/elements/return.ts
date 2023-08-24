import { Element } from '../abstracts/element';

/**
 * Return
 */
export class Return<T> extends Element<T> {
  // TODO: We should accept only a type that is "Returnable"
  public constructor(priorElement: Element<T>) {
    super(priorElement);
  }

  public clone(): Return<T> {
    return new Return<T>(this);
  }

  public toQuery(): string {
    return ` RETURN`;
  }
}
