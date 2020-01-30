const express = require('express');
const app = express();
const mysql = require('mysql');
const port = process.env.PORT || 4000;

let pool = mysql.createPool({
  connectionLimit: 100,
  host: '35.188.48.136',
  user: 'root',
  password: 'Thefatlady3',
  database: 'admin',
  debug: false
})

// check dees 'ments

function checkDees () {
  console.log('heyoo');
}

function get_users(request, response) {
  pool.query('SELECT * FROM users', (err, rows) => {
    if (err) {
      return response.json({
        'error': true, 
        'message': 'Error occured: ' +err
      })
    } else {
      response.json(rows);
    }
  })
}

function get_first_names(request, response) {
  let sql = 'SELECT ??, ?? FROM ?? WHERE ?? < ?';
  const replacements = ['id', 'first_name', 'users', 'id', 10];
  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, rows) => {
    if (err) {
      return response.json({
        'error': true, 
        'message': 'Error occured: ' +err
      })
    } else {
      response.json(rows);
    }
  })
}

app.get('/', (request, response) => {
  get_users(request, response);
})

app.get('/firstNames', (request, response) => {
  get_first_names(request, response);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})