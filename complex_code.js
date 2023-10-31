// filename: complex_code.js

// This code is a complex example of an image processing library in JavaScript.
// It provides various functions to manipulate and process images.

class ImageProcessor {
  constructor(imageData) {
    this.imageData = imageData;
  }

  applyGrayscale() {
    const data = this.imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = avg; // red
      data[i + 1] = avg; // green
      data[i + 2] = avg; // blue
    }
  }

  applySepia() {
    const data = this.imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = avg + 40; // red
      data[i + 1] = avg + 20; // green
      data[i + 2] = avg - 20; // blue
    }
  }

  applyInvert() {
    const data = this.imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      data[i] = 255 - data[i]; // red
      data[i + 1] = 255 - data[i + 1]; // green
      data[i + 2] = 255 - data[i + 2]; // blue
    }
  }

  applyBrightness(factor) {
    const data = this.imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      data[i] *= factor; // red
      data[i + 1] *= factor; // green
      data[i + 2] *= factor; // blue
    }
  }
}

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = url;
  });
}

function processImage(imageUrl) {
  loadImage(imageUrl)
    .then((image) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      context.drawImage(image, 0, 0);
      const imageData = context.getImageData(0, 0, image.width, image.height);

      const processor = new ImageProcessor(imageData);
      processor.applyGrayscale();
      processor.applySepia();
      processor.applyBrightness(1.2);

      context.putImageData(imageData, 0, 0);

      document.body.appendChild(canvas);
    })
    .catch((error) => {
      console.error('Error loading image:', error);
    });
}

const imageUrl = 'https://example.com/sample_image.jpg';
processImage(imageUrl);
