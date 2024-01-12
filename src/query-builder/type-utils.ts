export type Alphabet =
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z';

export type Optional<T> = T | undefined;

/**
 * Useful when the `Input` is an extension of `Shape` for value generics,
 * and we want to make sure that it has the same keys as `Shape`.
 *
 * It allows an empty object `{}` as a valid input.
 */
export type ExactShape<Input, Shape> = keyof Input extends never
  ? Input
  : {
      [Key in keyof Input]: Key extends keyof Shape ? Input[Key] : never;
    };
