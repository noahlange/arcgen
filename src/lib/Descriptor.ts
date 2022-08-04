export enum DescriptorType {
  PHYSIQUE = 0
}

export class Descriptor {
  public text: string;
  public sentiment: number;
  public type: DescriptorType;

  public constructor(
    text: string,
    sentiment: number = 0,
    type: DescriptorType
  ) {
    this.text = text;
    this.sentiment = sentiment;
    this.type = type;
  }
}
