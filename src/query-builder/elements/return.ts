import { Element } from '../abstracts/element';

/**
 * Return
 */
export class Return<ReturnProps extends string> extends Element {
  // TODO: We should accept only a type that is "Returnable"
  public constructor(
    priorElement: Element,
    private readonly props: ReturnProps,
  ) {
    super(priorElement);
  }

  protected toAppend(): string {
    return ` RETURN ${this.props}`;
  }
}
