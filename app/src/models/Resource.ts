export interface JSONResource {
  name: string;
  image: string;
  maxStrikes: number;
}

export class Resource {
  public name: string;
  public image: string;
  public maxStrikes: number;

  constructor(simpleResource: JSONResource) {
    this.name = simpleResource.name;
    this.image = simpleResource.image;
    this.maxStrikes = simpleResource.maxStrikes;
  }
}
