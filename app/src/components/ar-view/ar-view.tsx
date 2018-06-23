import { Component, Element } from "@stencil/core";

@Component({
  tag: "ar-view",
  styleUrl: "ar-view.scss"
})
export class ARView {
  @Element() arView: HTMLElement;
  private videoEle: HTMLVideoElement;

  private async setCameraBackground() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { exact: "environment" } }
      });
      this.videoEle.srcObject = stream;
    } catch (error) {
      // On Desktop and probably no read camera
    }
  }

  componentDidLoad() {
    this.videoEle = this.arView.querySelector("video");
    this.setCameraBackground();
  }

  render() {
    return <video autoplay />;
  }
}
