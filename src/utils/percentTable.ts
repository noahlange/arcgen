import { _ } from '../utils';

export function percentTable<T extends string | number>(
  data: Record<T, number>,
  percent: number
): T {
  const all = _.entries(data);
  let curr = 1;
  let val = null;
  for (const [value, pct] of all) {
    curr -= pct;
    if (percent >= curr) {
      val = value;
      break;
    }
  }
  const res = val ?? all[0][0];
  return (isFinite(+res) ? +res : res) as T;
}
