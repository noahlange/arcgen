import type { EntityId } from '@reduxjs/toolkit';
import { Country, Generation, Language } from '../origin';

export enum Gender {
  M = 'M',
  F = 'F'
}

export enum Sexuality {
  NONE = 0,
  HETEROSEXUAL = 1,
  BISEXUAL = 2,
  HOMOSEXUAL = 3
}

export interface PersonData {
  id: EntityId;
  seed: string;
  age: number;
  date_of_birth: string;
  gen: Generation;
  gender: Gender;
  sexuality: Sexuality;
  name: string[];
  languages: Language[];
  country: Country;
}
