import { Component, Element, Prop, Listen } from "@stencil/core";
import { Resource } from "../../models/Resource";
import { coordinates } from "./../../interfaces/coordinates";

@Component({
  tag: "resource-node",
  styleUrl: "resource-node.scss"
})
export class ResourceNode {
  private strikes: number = 0;
  private hitable: boolean = true;
  private pickaxeHit: HTMLAudioElement = new Audio(
    "../../assets/audio/metalPick.mp3"
  );
  private nodeBreaking: HTMLAudioElement = new Audio(
    "../../assets/audio/rockBreak.mp3"
  );

  @Element() node: HTMLElement;
  @Prop() resource: any | Resource;

  @Listen("click")
  public strike() {
    if (!this.hitable) {
      return;
    }

    this.hitable = false;
    this.strikes += 1;
    this.pickaxeHit.play();
    this.node.classList.remove("shake");
    void this.node.offsetWidth;
    this.node.classList.add("shake");

    if (this.strikes >= this.resource.maxStrikes) {
      this.nodeBreaking.play();
    }
  }

  private getOrigin(): coordinates {
    const rect = this.node.getBoundingClientRect();
    const x = rect.top - (rect.top - rect.bottom) / 2;
    const y = rect.left - (rect.left - rect.right) / 2;
    return { x, y };
  }

  componentDidLoad() {
    this.pickaxeHit.playbackRate = 1.5;
    this.node.style.backgroundImage = `url(${this.resource.image})`;
    this.node.addEventListener("webkitAnimationEnd", () => {
      this.hitable = true;
      if (this.strikes >= this.resource.maxStrikes) {
        const appRoot = document.querySelector("app-root") as any;
        const origin = this.getOrigin();
        appRoot.disperseResources(this.resource, origin);
        this.node.remove();
      }
    });
  }

  render() {
    return [];
  }
}
