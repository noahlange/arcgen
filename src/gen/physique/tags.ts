import { Gender } from '../people/types';
import { getBMI } from './calc';

export interface PhysiqueTags {
  height: PhysiqueTag;
  weight: PhysiqueTag;
}

/**
 * Where -5/+5 is abnormal, -3/+3 is mildly remarkable and 0 is average.
 */
export enum PhysiqueTag {
  SMALL_V = -5,
  SMALL_IV = -4,
  SMALL_III = -3,
  SMALL_II = -2,
  SMALL_I = -1,
  AVERAGE = 0,
  BIG_I = 1,
  BIG_II = 2,
  BIG_III = 3,
  BIG_IV = 4,
  BIG_V = 5
}

const thresholds = {
  bmi: [15, 16, 17, 18, 22.5, 25, 27.5, 35, 40, 45, 100],
  height: {
    [Gender.M]: [160, 163, 166, 170, 175, 182, 190, 195, 200, 205, 210],
    [Gender.F]: [155, 157.5, 160, 162.5, 165, 170, 180, 185, 190, 195, 200]
  }
};

export function getTags(
  gender: Gender,
  height: number,
  weight: number
): PhysiqueTags {
  const bmi = getBMI(height, weight);
  const heightIndex = thresholds.height[gender].findIndex(val => height <= val);
  const weightIndex = thresholds.bmi.findIndex(val => bmi <= val);
  return { weight: weightIndex - 5, height: heightIndex - 5 };
}
