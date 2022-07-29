import { Request, Response } from 'express';
import HttpException from '../interfaces/exception';
import RandomImageService from '../service/random-image.service';

/**
 * Random image controller
 */
class RandomImageController {
  constructor() {}

  /**
   * Get random image from local `image` folder
   */
  async getRandomImage(req: Request, res: Response) {
    try {
      const path = await RandomImageService.getRandomImage();

      res.sendFile(path);
    } catch (e: any | HttpException) {
      res.send(e?.code || 500).json(e.error);
    }
  }
}

export default new RandomImageController();
