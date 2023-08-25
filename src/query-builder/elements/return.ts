import { Element } from '../abstracts/element';

import type { Pattern } from '../abstracts/pattern';

/**
 * Return
 */
export class Return<ReturnProps extends string> extends Element<ReturnProps> {
  // TODO: We should accept only a type that is "Returnable"
  public constructor(
    priorElement: Element<Pattern>,
    private readonly props: ReturnProps,
  ) {
    super(priorElement);
  }

  public clone(): Return<ReturnProps> {
    return new Return<ReturnProps>(this, this.props);
  }

  public toQuery(): string {
    return ` RETURN ${this.props}`;
  }
}
