export enum DescriptorType {
  PHYSIQUE
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
