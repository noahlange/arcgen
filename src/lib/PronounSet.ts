import { Person } from '../gen/people/Person';
import { Gender } from '../gen/people/types';

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
