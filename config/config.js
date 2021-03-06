require('dotenv').config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "duuka_dev",
    "host": DB_HOST,
    "port": 5432,
    "dialect": "postgres"
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "duuka_test",
    "host": DB_HOST,
    "port": 5432,
    "dialect": "postgres"
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "duuka_production",
    "host": DB_HOST,
    "port": 5432,
    "dialect": "postgres"
  }
};
