import type { PhysiqueData } from '../physique';
import type { RPGData } from '../rpg';
import type { Gender, PersonData } from './types';

import { Seeder } from '../../lib';
import { getPhysique } from '../physique';
import { getRPG } from '../rpg';

export class Person {
  public get dob(): Date {
    return new Date(this.data.date_of_birth);
  }

  public get seed(): string {
    return this.seeder.value;
  }

  public get name(): string {
    return this.data.name.join(' ');
  }

  public get gender(): Gender {
    return this.data.gender;
  }

  public get data(): PersonData {
    return this._data;
  }

  public get physique(): PhysiqueData {
    return (this._physique ??= getPhysique(this.seeder, this.data));
  }

  public get rpg(): RPGData {
    return (this._rpg ??= getRPG(this.seeder, this.data, this.physique));
  }

  protected seeder: Seeder;
  protected _data: PersonData;
  protected _rpg: RPGData | null = null;
  protected _physique: PhysiqueData | null = null;

  public constructor(data: PersonData) {
    this._data = data;
    this.seeder = new Seeder(data.seed);
  }
}
