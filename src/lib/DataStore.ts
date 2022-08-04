export class DataStore<T> {
  protected _data: T[] = [];

  public get(id: number): T | null {
    return this._data[id] ?? null;
  }

  public set(id: number, value: T): void {
    this._data[id] = value;
  }
}
