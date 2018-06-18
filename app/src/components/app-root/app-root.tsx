import { Component } from '@stencil/core';
import { rocks } from '../../assets/rocks';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss'
})
export class AppRoot {

  render() {
    return (
      <main>
        <rock-shard img={rocks[0].image} initTop={250} initLeft={250}/>
        <rock-shard img={rocks[0].image} initTop={250} initLeft={250}/>
        {rocks.map((rock) =>
          <minner-rock img={rock.image} max-strikes={rock.maxStrikes}/>
        )}
      </main>
    );
  }
}
