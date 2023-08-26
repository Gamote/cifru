import { Element } from '../abstracts/element';

/**
 * Return
 */
export class Return<Variable extends string | number> extends Element {
  // TODO: We should accept only a type that is "Returnable"
  public constructor(
    priorElement: Element,
    private readonly variable: Variable,
  ) {
    super(priorElement);
  }

  protected toAppend(): string {
    return ` RETURN ${this.variable}`;
  }
}
