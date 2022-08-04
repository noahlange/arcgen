import { describe, expect, test } from '@jest/globals';
import seedrandom from 'seedrandom';

import { getSmudger } from './smudge';

describe('smudge', () => {
  const values = [1, 2, 3, 4, 5, 6, 7, 8];
  const smudge = getSmudger(seedrandom('smudge'));

  test('returns the same number of values', () => {
    expect(smudge(values)).toHaveLength(values.length);
  });

  test('values should be within smudge %', () => {
    const percent = 0.25;
    const smudged = smudge(values, percent);
    for (let i = 0; i < smudged.length; i++) {
      const actual = values[i];
      expect(Math.abs(smudged[i] - actual)).toBeLessThan(actual * percent);
    }
  });

  test('some values should be lower', () => {
    expect(smudge(values).some((value, i) => values[i] < value)).toBeTruthy();
  });

  test('some values should be higher', () => {
    expect(smudge(values).some((value, i) => values[i] > value)).toBeTruthy();
  });
});
