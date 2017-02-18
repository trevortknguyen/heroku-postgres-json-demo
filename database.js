var pg = require('pg');
var db = new pg.Client(process.env.DATABASE_URL);

db.connect(function(err) {
  if (err) throw err;
  console.log('PostgreSQL is connected!');
  db.query('CREATE TABLE IF NOT EXISTS posts(data JSON)');
});

module.exports = db;
