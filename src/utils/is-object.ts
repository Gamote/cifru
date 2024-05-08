const isObject = (value: unknown): boolean =>
  value !== null && typeof value === 'object';

export default isObject;
