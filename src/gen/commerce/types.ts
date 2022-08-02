import { EntityId } from '@reduxjs/toolkit';

// prettier-ignore
export enum Service {
  SERVICE = 0b000000001, // haircuts, cleaning, protection, etc.
  FOOD    = 0b000000010, // restaurant, food stand, grocer
  GEAR    = 0b000000100, // equipment
  TECH    = 0b000001000, // electronic devices, hacks
  GUNS    = 0b000010000, // guns, weapons and ammunition
  ARMOR   = 0b000100000, // armor
  GOODS   = 0b001000000, // general goods
  CYBER   = 0b010000000, // cyberware
  MEDIC   = 0b100000000 // pharmacy, doctor, etc.
}

// prettier-ignore
export enum Type {
  PUBLIC    = 0b0001, // public vs. private
  NONPROFIT = 0b0010, // profit vs. nonprofit
  LARGE     = 0b0100, // small vs. large
  ILLEGAL   = 0b1000 // legal vs. illegal
}

export interface Business {
  id: EntityId;
  name: string;
  owner: EntityId;
  type: number;
  services: number;
}
