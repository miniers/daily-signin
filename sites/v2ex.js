const config = require('../config');

const Nightmare = require('nightmare');

const nightmare = Nightmare(config.nightmare);

const { urls: URLS, elements: ELES } = config.sites.v2ex;

const run = () => {
  const { username, password } = config.profile;

  return nightmare
    .goto(URLS.signin)
    .wait(ELES.usernameInput)
    .type(ELES.usernameInput, username)
    .type(ELES.passwordInput, password)
    .end();
};

module.exports = {
  run,
};
