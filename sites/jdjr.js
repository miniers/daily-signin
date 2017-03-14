const config = require('../config');

const Nightmare = require('nightmare');

const nightmare = Nightmare(config.nightmare);

const { urls: URLS, elements: ELES } = config.sites.jdjr;

const run = () => {
  const { username, password } = config.profile;

  return nightmare
    .goto(URLS.home)
    .wait(ELES.gotoLogin)
    .click(ELES.gotoLogin)
    .wait(ELES.usernameLoginButton)
    .click(ELES.usernameLoginButton)
    .wait(ELES.usernameInpu)
    .type(ELES.usernameInput, username)
    .type(ELES.passwordInput, password)
    .click(ELES.loginButton)
    // .wait(ELES.checkinBtn)
    // .click(ELES.checkinBtn)
    // .wait(ELES.checkinSuccess)
    // // "签到成功" if success
    // .evaluate(selector => document.querySelector(selector).innerText, ELES.checkinSuccess)
    // .end();
};

module.exports = {
  run,
};

