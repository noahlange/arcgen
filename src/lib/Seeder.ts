import seedrandom, { PRNG } from 'seedrandom';
import { getNormalRNG } from '../utils/rng';

export class Seeder {
  public readonly value: string;
  public readonly rng: PRNG;
  public readonly normal: ReturnType<typeof getNormalRNG>;

  protected _index = 0;

  public nextID(): number {
    return this._index++;
  }

  public use(value: string | number): Seeder {
    return new Seeder(this.value + '.' + value);
  }

  constructor(text: string) {
    this.value = text;
    this.rng = seedrandom(text);
    this.normal = getNormalRNG(this.rng);
  }
}
