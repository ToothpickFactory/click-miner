import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'rock-shard',
  styleUrl: 'rock-shard.scss'
})
export class RockShard {
  @Prop() img: string;
  @Prop() initTop: number;
  @Prop() initLeft: number;
  @Element() shard: HTMLElement;

  componentDidLoad(){
    this.shard.style.backgroundImage = `url(${this.img})`;
    this.shard.style.top = `${this.initTop}px`;
    this.shard.style.left = `${this.initLeft}px`;
    this.shard.addEventListener('click', () => this.pickup());
    setTimeout(() => this.disperse(), 500);
  }

  private disperse(){
    const top = this.getRandomNumber(window.innerHeight);
    const left = this.getRandomNumber(window.innerWidth);
    this.shard.style.top = `${top}px`;
    this.shard.style.left = `${left}px`;
  }

  private getRandomNumber(max: number){
    return Math.random() * (max - 100) + 100;
  }

  public pickup(){
    this.shard.remove();
  }

  render() {
    return ([]);
  }
}
