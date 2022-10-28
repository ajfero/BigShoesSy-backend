require("dotenv").config();

const PORT = process.env.PORT;

//Configs DB
const host = process.env.DB_HOST;
const username = process.env.DB_USERNAME || "root";
const database = process.env.DB_DATABASE || "ejemplo_db";
const password = process.env.DB_PASSWORD;
const dialect = process.env.DB_DIALECT || "mysql";
const logging = false;

//Configs Seeds
const seederStorage = "sequelize";
const seederStorageTableName = "seeds";

//Configs Migrations
const migrationStorage = "sequelize";
const migrationStorageTableName = "migrations";

module.exports = {
  PORT,
  host,
  username,
  database,
  password,
  dialect,
  logging,
  seederStorage,
  seederStorageTableName,
  migrationStorage,
  migrationStorageTableName
}