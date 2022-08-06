import type { Person } from '@/gen/people';

import { Gender } from '@/gen/people';

const thirdPerson: Record<Gender, string> = {
  [Gender.M]: 'he',
  [Gender.F]: 'she'
};

export class PronounSet {
  public readonly first = 'I';
  public readonly second: string = 'you';
  public readonly third: string;

  public toString(): string {
    return this.third;
  }

  public constructor(person: Person) {
    this.third = thirdPerson[person.gender];
  }
}
