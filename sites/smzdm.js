const Nightmare = require('nightmare');
require('nightmare-iframe-manager')(Nightmare);

const nightmare = Nightmare({
  show: true,
  webPreferences: {
    webSecurity: false,
  },
});
const URLS = {
  home: 'http://www.smzdm.com',
  login: 'https://zhiyou.smzdm.com/user/login/ajax_check',
};

const ELES = {
  login: '.J_login_trigger',
  loginIframe: '#J_login_iframe',
  usernameInput: '#username',
  passwordInput: '#password',
  loginButton: '#login_submit',
  userInfo: '#index-head > div.J_entry.entry > div.user-wrap > div > div.user-info.J_info',
  dailySigninButton: '#index-head > div.J_entry.entry > div.old-entry > span > a',
  oldVersionButton: '#index-head > div.J_entry.entry > div.old-entry > a',
};

const run = (config) => {
  const { username, password } = config;

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
