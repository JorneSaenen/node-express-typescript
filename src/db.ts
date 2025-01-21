const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_DATABASE } = process.env;
import knex from "knex";

export default knex({
  client: "mysql2",
  connection: {
    host: DB_HOST,
    port: Number(DB_PORT),
    user: DB_USER,
    password: DB_PASS,
    database: DB_DATABASE,
  },
});
