const path = require('path');
const sqlite3 = require('sqlite3').verbose()

const DB_PATH = path.join(__dirname, '..', 'db', 'chinook.db');

const db = new sqlite3.Database(
  DB_PATH,
  (err) => {
    if (err) {
      console.error(err.message)
      return;
    }

    console.log('Connected to the SQlite database.')

  }
);

module.exports = db
