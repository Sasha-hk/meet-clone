import fs from 'fs/promises';
import path from 'path';

import { randomNumber } from '../utils/random';
import getFileExtension from '../utils/get-file-extension';

/**
 * Random image service
 */
class RandomImageService {
  constructor() {}

  /**
   * Get random image from local `images` folder
   *
   * @returns image
   */
  async getRandomImage() {
    const imagesPath = path.join(path.resolve(), 'src', 'images')
    const images = await fs.readdir(path.join(path.resolve(), 'src', 'images'));
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'webp'];

    // Check if images exists
    let imagesExists = false;

    for (let i = 0; i < images.length; i++) {
      const extension = getFileExtension(images[i]);

      if (extension) {
        if (allowedExtensions.includes(extension)) {
          imagesExists = true;
        }
      }
    }

    if (!imagesExists) {
      throw new Error(
        `Images with allows extensions not exists at ${
          path.join(path.resolve(), 'src', 'images')
        }`
      );
    }

    // Select random image
    let index = randomNumber(0, images.length);
    let extension = getFileExtension(images[index]);

    while (true) {
      index = randomNumber(0, images.length);
      extension = getFileExtension(images[index]);

      if (!extension) {
        continue;
      }

      if (allowedExtensions.includes(extension)) {
        break;
      }
    }

    return path.join(imagesPath, images[index])
  }
}

export default new RandomImageService()
