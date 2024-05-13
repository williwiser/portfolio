import pg from "pg";
import "dotenv/config";

const { Pool } = pg;

const db = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export default db;
