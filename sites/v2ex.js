const config = require('../config');

const Nightmare = require('nightmare');

const nightmare = Nightmare(config.nightmare);

const { urls: URLS, elements: ELES } = config.sites.v2ex;

const run = (username, password) => {

  return nightmare
    .goto(URLS.signin)
    .wait(ELES.usernameInput)
    .type(ELES.usernameInput, username)
    .type(ELES.passwordInput, password)
    .click(ELES.loginButton)
    .wait(ELES.gotoDailySignin)
    .click(ELES.gotoDailySignin)
    .wait(ELES.dailySigninButton)
    .click(ELES.dailySigninButton)
    .wait(ELES.dailySigninResult)
    .evaluate(selector => document.querySelector(selector).innerText, ELES.dailySigninResult)
    .end();
};

module.exports = {
  run,
};
