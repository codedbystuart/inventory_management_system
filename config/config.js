require('dotenv').config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT } = process.env;

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "duuka_dev",
    "host": DB_HOST,
    "port": DB_PORT,
    "dialect": "postgres"
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "duuka_test",
    "host": DB_HOST,
    "port": DB_PORT,
    "dialect": "postgres"
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "duuka_production",
    "host": DB_HOST,
    "port": DB_PORT,
    "dialect": "postgres"
  }
};
