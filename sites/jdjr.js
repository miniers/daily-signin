const config = require('../config');

const Nightmare = require('nightmare');

const nightmare = Nightmare(config.nightmare);

const { urls: URLS, elements: ELES } = config.sites.jdjr;

const run = (username, password) => {

  return nightmare
    .goto(URLS.home)
    .wait(ELES.gotoLogin)
    .click(ELES.gotoLogin)
    .wait(ELES.usernameLoginButton)
    .click(ELES.usernameLoginButton)
    .wait(ELES.usernameInput)
    .type(ELES.usernameInput, username)
    .type(ELES.passwordInput, password)
    .click(ELES.loginButton)
    .wait(ELES.checkinBtn)
    .click(ELES.checkinBtn)
    .wait(ELES.checkinSuccess)
    // "已签到" if success
    .evaluate(selector => document.querySelector(selector).innerText, ELES.checkinSuccess)
    .end();
};

module.exports = {
  run,
};

