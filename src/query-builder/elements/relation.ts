import { Pattern } from '../abstracts/pattern';

import { Node } from './node';

import type { PatternAttributes, ValidPatternName } from '../abstracts/pattern';
import type { Optional, ValidateShape } from '../type-utils';

export enum Direction {
  Outgoing = '>',
  Incoming = '<',
  Both = '<>',
  Undirected = '',
}

export type RelationAttributes<
  Variable extends Optional<ValidPatternName> = Optional<ValidPatternName>,
> = PatternAttributes<Variable> & {
  direction?: Direction;
};

/**
 * Relation
 */
export class Relation<
  Attributes extends RelationAttributes,
> extends Pattern<Attributes> {
  public readonly __type = Relation.name;

  /**
   * Generates a type-safe method to create an instance.
   * TODO: Should we enforce it through the Element abstract class?
   *
   * @param priorElement
   */
  static factory(priorElement?: Pattern) {
    return <Attributes extends RelationAttributes>(
      // Use `Exact` to not allow extra attributes TODO: add tests to check this
      attributes?: ValidateShape<Attributes, RelationAttributes>,
    ) => new Relation(priorElement, attributes);
  }

  protected toAppend(): string {
    const getArrows = (
      direction?: Direction,
    ): { left: string; right: string } => {
      switch (direction) {
        case Direction.Outgoing:
          return { left: '-', right: '->' };
        case Direction.Incoming:
          return { left: '<-', right: '-' };
        case Direction.Both:
          return { left: '<-', right: '->' };
        default:
          return { left: '-', right: '-' };
      }
    };

    const arrows = getArrows(this.attributes?.direction);

    return `${arrows.left}[${super.toAppend()}]${arrows.right}`;
  }

  public node = Node.factory(this);
}
