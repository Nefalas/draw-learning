const defaultConfig = {
  width: 192,
  height: 108,
  scale: 2
};

/**
 * Class Canvas
 *
 * @property {HTMLCanvasElement} canvas
 * @property {number} width
 * @property {number} height
 * @property {number} scale
 */
export default class Canvas {
  constructor(canvas, config = defaultConfig) {
    this.canvas = canvas;
    this.loadConfig(config);

    this.setupCanvas();

    this.getPixels = this.getPixels.bind(this);
  }

  loadConfig(config) {
    Object.keys(defaultConfig).forEach(key => {
      this[key] = config && config[key] ? config[key] : defaultConfig[key];
    });
  };

  setupCanvas() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.canvas.style.width = this.width * this.scale + 'px';
    this.canvas.style.height = this.height * this.scale + 'px';
  };

  drawImage(image) {
    return new Promise(resolve => {
      let img = new Image();
      img.onload = () => {
        let ctx =  this.canvas.getContext('2d');
        ctx.drawImage(
          img,
          0, 0,
          img.width, img.height,
          0, 0,
          this.width,
          this.height
        );
        resolve();
      };
      img.src = image;
    })
  };

  getPixels() {
    let ctx =  this.canvas.getContext('2d');
    let imageData = ctx.getImageData(0, 0, this.width, this.height);

    let pixels = [];
    imageData.data.forEach((value, index) => {
      if ((index + 1) % 4) {
        pixels.push(value);
      }
    });

    return pixels;
  }
}