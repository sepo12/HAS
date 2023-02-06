const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'has_db',
  password: 'Bigsean12',
  port: 5432
  
});

module.exports=client;
  
  

  