const config = require('../config');

const Nightmare = require('nightmare');
require('nightmare-iframe-manager')(Nightmare);

const nightmare = Nightmare(config.nightmare);

const URLS = config.sites.smzdm.urls;
const ELES = config.sites.smzdm.elements;

const run = () => {
  const { username, password } = config.profile;

  return nightmare
    .goto(URLS.home)
    .wait(ELES.login)
    .click(ELES.login)
    .wait(ELES.loginIframe)
    .enterIFrame(ELES.loginIframe)
    .wait(ELES.usernameInput)
    .type(ELES.usernameInput, username)
    .type(ELES.passwordInput, password)
    .click(ELES.loginButton)
    .resetFrame()
    .wait(ELES.userInfo)
    .wait(1000)
    .click(ELES.dailySigninButton);
};

module.exports = {
  run,
  URLS,
};
