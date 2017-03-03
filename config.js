module.exports = {
  site: process.env.SITE || 'smzdm',
  profile: {
    username: process.env.DUSERNAME,
    password: process.env.DPASSWORD,
  },
  sites: {
    smzdm: {
      urls: {
        home: 'http://www.smzdm.com',
        login: 'https://zhiyou.smzdm.com/user/login/ajax_check',
      },
      elements: {
        login: '.J_login_trigger',
        loginIframe: '#J_login_iframe',
        usernameInput: '#username',
        passwordInput: '#password',
        loginButton: '#login_submit',
        userInfo: '#index-head > div.J_entry.entry > div.user-wrap > div > div.user-info.J_info',
        dailySigninButton: '#index-head > div.J_entry.entry > div.old-entry > span > a',
        oldVersionButton: '#index-head > div.J_entry.entry > div.old-entry > a',
      },
    },
  },
  nightmare: {
    show: process.env.NODE_ENV === 'dev',
    webPreferences: {
      webSecurity: false,
    },
  },
};
