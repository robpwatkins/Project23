const axios = require('axios');

axios('https://austincodingacademy.com')
  .then(response => {
    console.log(response);
  })