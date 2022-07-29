import express from 'express';
import dotenv from 'dotenv';

import router from './router';

dotenv.config({ path: '../.env.local' });

async function start() {
  const app = express();

  const PORT = process.env.PORT;

  app.use('/api', router);

  app.listen(PORT, () => {
    console.log(`Server started http://localhost:${PORT}/`)
  })
}

start();
