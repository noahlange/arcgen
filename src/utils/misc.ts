export function entries<T>(object: T): [keyof T, T[keyof T]][] {
  return Object.entries(object) as [keyof T, T[keyof T]][];
}

export function keys<T>(object: T): (keyof T)[] {
  return Object.keys(object) as (keyof T)[];
}

export function values<T>(object: T): T[keyof T][] {
  return Object.values(object) as T[keyof T][];
}
