import dotenv from 'dotenv';

/**
 * Export .env file according to NODE_ENV variable
 */
export default () => {
  const env = process.env.NODE_ENV!;

  switch (env) {
    case 'development':
      dotenv.config({ path: './.env.development' });
      break;

    case 'production':
      dotenv.config({ path: './.env.local' });
      break;

    case 'test':
      dotenv.config({ path: './.env.test' });
      break;

    default:
      throw new Error('NODE_ENV env variable not specified');
  }
}
