const axios = require('axios');

const run = (config) => {
  // const { username, password } = config;
  axios.get(config);
};


module.exports = run;
