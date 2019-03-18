import Canvas from './Canvas';

export default class App {
  constructor(sourceCanvas, outputCanvas) {
    this.sourceCanvas = new Canvas(sourceCanvas);
    this.outputCanvas = new Canvas(outputCanvas);
    this.sourceImage = null;
  }

  setSourceImage(image) {
    return this.sourceCanvas.drawImage(image);
  }

}