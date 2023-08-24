import { Query } from './query';

/**
 * Pattern
 */
export abstract class Pattern<T = unknown> extends Query<Pattern<T>> {}
