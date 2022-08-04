import { roll } from '@airjp73/dice-notation';
import { customRandom, urlAlphabet } from 'nanoid';
import seedrandom from 'seedrandom';

export type RandomFn = () => number;

export function getID(seed: string): string {
  const rng = seedrandom(seed);
  return customRandom(urlAlphabet, 10, size =>
    new Uint8Array(size).map(() => 256 * rng())
  )();
}

export function getIDGen(seed: string): () => string {
  const rng = seedrandom(seed);
  return customRandom(urlAlphabet, 10, size =>
    new Uint8Array(size).map(() => 256 * rng())
  );
}

export function pick<T>(fn: RandomFn, arr: T[], count: number): T[];
export function pick<T>(fn: RandomFn, arr: T[]): T;
export function pick<T>(
  fn: RandomFn,
  array: T[],
  count: number | null = null
): T | T[] {
  return typeof count === 'number'
    ? shuffle(fn, array).slice(0, count)
    : array[Math.floor(fn() * array.length)];
}

interface NormalRNG {
  (): number;
  skew(min: number, max: number, skew?: number, rounds?: number): number;
}

export function getNormalRNG(rng: RandomFn): NormalRNG {
  const normal = (rounds: number = 6): number => {
    let sum = 0;
    for (let i = 0; i < rounds; i++) {
      sum += rng();
    }
    return sum / rounds;
  };

  /**
   * Return a normally-distributed value from min to max, shifted up or down on
   * a curve. Optionally with a number of random iterations for a flatter (<3)
   * or more bell-ish curve (3+).
   */
  function skew(
    min: number,
    max: number,
    skew: number = 1,
    rounds?: number
  ): number {
    let num = normal(rounds);
    num = Math.pow(num, skew); // Skew
    num *= max - min; // Stretch to fill range
    num += min; // offset to min
    return num;
  }

  return Object.assign(normal, { skew });
}

export function shuffle<T>(fn: RandomFn, original: T[]): T[] {
  const array = [...original];
  let [a, b] = [array.length, 0];

  // While there remain elements to shuffle.
  while (a !== 0) {
    // Pick a remaining element.
    b = Math.floor(fn() * a);
    a--;
    // And swap it with the current element.
    [array[a], array[b]] = [array[b], array[a]];
  }

  return array;
}

export function getBetween(fn: RandomFn) {
  return (min: number, max: number) => fn() * (max - min) + min;
}

export function getRoller(fn: RandomFn): (dice: string) => number {
  const random = getBetween(fn);
  return (dice: string) =>
    roll(dice, { random: (min, max) => Math.round(random(min, max)) }).result;
}
