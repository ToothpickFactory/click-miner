import { Component, Element, Prop } from '@stencil/core';

@Component({
  tag: 'minner-rock',
  styleUrl: 'minner-rock.scss'
})
export class MinnerRock {
  private strikes: number = 0;
  private hitable: boolean = true;
  private pickaxeHit: HTMLAudioElement = new Audio('../../assets/audio/metalPick.mp3');
  private rockBreaking: HTMLAudioElement = new Audio('../../assets/audio/rockBreak.mp3');

  @Element() rock: HTMLElement;
  @Prop() img: string;
  @Prop() maxStrikes: number = 1;

  componentDidLoad(){
    this.pickaxeHit.playbackRate = 1.5;

    this.rock.style.backgroundImage = `url(${this.img})`;
    this.rock.addEventListener('click', () => {
      this.strike();
    });
    this.rock.addEventListener('webkitAnimationEnd', () => {
      this.hitable = true;
      if(this.strikes >= this.maxStrikes) {
        this.rock.remove();
      }
    });
  }

  strike(){
    if(!this.hitable) {
      return
    }

    this.hitable = false;
    this.strikes += 1;
    this.pickaxeHit.play();
    this.rock.classList.remove('shake');
    void this.rock.offsetWidth;
    this.rock.classList.add('shake');

    if(this.strikes >= this.maxStrikes) {
      this.rockBreaking.play();
    }
  }

  render() {
    return ([]);
  }
}
