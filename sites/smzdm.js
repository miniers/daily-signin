const Nightmare = require('nightmare');

const nightmare = Nightmare({ show: true });
const URLS = {
  home: 'http://www.smzdm.com',
  login: 'https://zhiyou.smzdm.com/user/login/ajax_check',
};

const ELES = {
  login: '.J_login_trigger',
  usernameInput: '#username',
  passwordInput: '#password',
};

const run = (config) => {
  const { username, password } = config;

  return nightmare
    .goto(URLS.home)
    .wait(ELES.login)
    .click(ELES.login)
    .wait(ELES.usernameInput)
    .type(ELES.usernameInput, username)
    .type(ELES.passwordInput, password);
};

module.exports = {
  run,
  URLS,
};
