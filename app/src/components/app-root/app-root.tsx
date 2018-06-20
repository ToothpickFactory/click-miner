import { Component, State } from "@stencil/core";
import { store } from "../../store/store";
import { rocks } from "../../assets/rocks";
import { Resource } from "./../../models/Resource";

@Component({
  tag: "app-root",
  styleUrl: "app-root.scss"
})
export class AppRoot {
  @State() resources = [];
  public rockShardResource: Resource;
  public player: any;

  componentWillLoad() {
    this.rockShardResource = new Resource(rocks[0]);
    store.subscribe(() => {
      const state = store.getState();
      this.resources = [...state.PlayerReducer.resources];
    });
  }

  render() {
    return (
      <main>
        <ul>
          {this.resources.map(resource => (
            <li>
              {resource.name}: {resource.amount}
            </li>
          ))}
        </ul>
        <rock-shard
          resource={this.rockShardResource}
          initTop={250}
          initLeft={250}
        />
        <rock-shard
          resource={this.rockShardResource}
          initTop={250}
          initLeft={250}
        />
        {rocks.map(rock => (
          <minner-rock img={rock.image} max-strikes={rock.maxStrikes} />
        ))}
      </main>
    );
  }
}
