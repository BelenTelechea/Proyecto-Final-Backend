const { Sequelize } = require('sequelize');
require('dotenv').config();

console.log('Database URL:', process.env.DATABASE_URL); // Para depuración

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not defined');
}

const sequelize = new Sequelize(process.env.DATABASE_URL, { dialect: 'postgres' });

module.exports = sequelize;
