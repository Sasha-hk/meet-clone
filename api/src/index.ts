import express from 'express';

import dotEnv from './utils/dot-env';
import router from './router';

dotEnv();

async function start() {
  const env = process.env.NODE_ENV!;
  const app = express();

  const PORT = process.env.API_PORT;

  app.use('/api', router);

  app.listen(PORT, () => {
    console.log(`Server is running in ${env} mode at http://localhost:${PORT}/`)
  })
}

start();
