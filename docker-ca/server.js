const { Client } = require('pg');

const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'mydb'
});

client.connect();

require('http')
  .createServer(async (req, res) => {
    const result = await client.query('SELECT NOW()');
    res.end(result.rows[0].now.toString());
  })
  .listen(3000);
