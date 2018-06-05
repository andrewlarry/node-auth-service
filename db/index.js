const { Pool, Client } = require('pg');

// Postgres config object
const pgConfig = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
};

const pool = new Pool(pgConfig);
const client = new Client(pgConfig);


function createTable() {
  let created = false;
  function create() {
    created = true;
    client.query(
      `CREATE TABLE items (
        id SERIAL PRIMARY KEY
        ussern

      )`
    )
  }
}




module.exports = function test() {
  console.log(process.env);
}