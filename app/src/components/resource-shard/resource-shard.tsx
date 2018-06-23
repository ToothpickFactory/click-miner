import { Component, Prop, Element, Listen } from "@stencil/core";
import { store } from "../../store/store";
import { addResource } from "../../store/actions/addResource";
import { Resource } from "./../../models/Resource";

@Component({
  tag: "resource-shard",
  styleUrl: "resource-shard.scss"
})
export class ResourceShard {
  @Prop() resource: any | Resource; // but really is a Resource but TS freaks
  @Prop() initTop: number;
  @Prop() initLeft: number;
  @Element() shard: HTMLElement;

  @Listen("click")
  public pickup() {
    store.dispatch(addResource(this.resource, 1));
    this.shard.remove();
  }

  componentDidLoad() {
    this.shard.style.backgroundImage = `url(${this.resource.image})`;
    this.shard.style.top = `${this.initTop}px`;
    this.shard.style.left = `${this.initLeft}px`;
    setTimeout(() => this.disperse());
  }

  private disperse() {
    const top = this.getRandomNumber(window.innerHeight);
    const left = this.getRandomNumber(window.innerWidth);
    this.shard.style.top = `${top}px`;
    this.shard.style.left = `${left}px`;
  }

  private getRandomNumber(max: number) {
    return Math.random() * max;
  }

  render() {
    return [];
  }
}
