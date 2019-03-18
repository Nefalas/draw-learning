import './index.css';
import App from './classes/App';
import Image from './resources/dv.jpeg';

let sourceCanvas = document.getElementById('source-canvas');
let outputCanvas = document.getElementById('output-canvas');

let app = new App(sourceCanvas, outputCanvas);

app.setSourceImage(Image)
.then(() => {
  console.log(app.sourceCanvas.getPixels())
});