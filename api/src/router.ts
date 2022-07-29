import { Router } from 'express';

import randomImageController from './controller/random-image.controller';

const router = Router();

router.get('/random-image', randomImageController.getRandomImage);

export default router;
