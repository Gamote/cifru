import { describe, it, expect } from 'vitest';
import {nothing} from "./index";

describe('noting', () => {
  it('should be nothing', () => {
    expect(nothing).toBe(undefined);
  });
});
