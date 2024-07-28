// testEnv.js
require('dotenv').config();

console.log('Database URL:', process.env.DATABASE_URL);

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not defined');
}
