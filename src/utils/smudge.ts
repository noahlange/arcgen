import { _ } from '../utils';
import { RandomFn } from './rng';

type Smudgeable = number[] | Record<string | number, number>;

/**
 * Given a random number generation function, return a function
 * that will tweak an array of values within a certain % range.
 */
export function getSmudger(fn: RandomFn = Math.random) {
  return <T extends Smudgeable>(values: T, factor: number = 0.1): T => {
    const res: Record<string | number, number> = {};
    const items = _.entries(values) as [string | number, number][];

    for (const [key, value] of items) {
      const limit = value * factor;
      // factor % in either direction
      const offset = 2 * limit * (fn() - 0.5);
      res[key] = value + offset;
    }

    return (
      Array.isArray(values)
        ? items.reduce((a: number[], [key]) => a.concat(res[key]), [])
        : res
    ) as T;
  };
}
