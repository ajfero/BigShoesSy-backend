require("dotenv").config();

//Configs DB
const PORT = process.env.PORT;
const host = process.env.DB_HOST;
const username = process.env.DB_USERNAME || "root";
const database = process.env.DB_DATABASE || "bigshoessy";
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