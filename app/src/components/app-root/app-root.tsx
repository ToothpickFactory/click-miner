import { Component, State, Method, Element } from "@stencil/core";
import { store } from "../../store/store";
import { rocks } from "../../assets/rocks";
import { Resource } from "./../../models/Resource";
import { coordinates } from "./../../interfaces/coordinates";

@Component({
  tag: "app-root",
  styleUrl: "app-root.scss"
})
export class AppRoot {
  @State() resources = [];
  @State() resourceShards: JSX.Element[] = [];
  @Element() ele: HTMLElement;
  public player: any;
  private node: HTMLElement;

  public moveView(event) {
    const x = (window.innerHeight / 360) * event.alpha * -1;
    const y = (window.innerHeight / 180) * event.beta * -1;
    this.node.style.top = `${y}px`;
    this.node.style.left = `${x}px`;
  }

  componentDidLoad() {
    this.node = this.ele.querySelector("main");
  }

  componentWillLoad() {
    window.addEventListener(
      "deviceorientation",
      event => this.moveView(event),
      true
    );

    store.subscribe(() => {
      const state = store.getState();
      this.resources = [...state.PlayerReducer.resources];
    });
  }

  @Method()
  disperseResources(resource: Resource, origin: coordinates) {
    const numberOfShards = 100;
    let shards = [];
    for (let i = 0; i < numberOfShards; i++) {
      shards.push(
        <resource-shard
          resource={resource}
          initTop={origin.x}
          initLeft={origin.y}
        />
      );
    }
    this.resourceShards = [...this.resourceShards, ...shards];
  }

  render() {
    return [
      <ar-view />,
      <main>
        <ul>
          {this.resources.map(resource => (
            <li>
              {resource.name}: {resource.amount}
            </li>
          ))}
        </ul>
        <resource-node resource={new Resource(rocks[0])} />
        {this.resourceShards}
      </main>
    ];
  }
}
