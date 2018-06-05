const { Client } = require('pg');
const fs = require('fs');

// Config object for postgres client
const pgConfig = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
};
const client = new Client(pgConfig);

// Read the sql query into a string
const sql = fs.readFileSync('create_tables.sql').toString();

module.exports = function createUserTable() {
  // Only run once
  let created = false;

  function create() {
    created = true;
    client.connect();
    client.query(sql, (err, res) => {
      if (err) {
        console.log(err);
        client.end();
      } else {
        console.log('Tables created.');
        client.end();
      }
    });
  }
  if (!created) create();
}