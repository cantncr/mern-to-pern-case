import { Sequelize } from 'sequelize';

const DATABASE_NAME = process.env.DATABASE_NAME || 'records';
const DATABASE_HOST = process.env.DATABASE_HOST || 'db';
const DATABASE_USER = process.env.DATABASE_USER || 'user';
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || 'password';

const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, {
  host: DATABASE_HOST,
  dialect: 'postgres',
  logging: false,
});

export default sequelize;
