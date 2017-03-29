module.exports = {
  sites: {
    jdjr: {
      urls: {
        home: 'http://vip.jr.jd.com',
      },
      elements: {
        gotoLogin: '#loginbar > a.link-login',
        usernameLoginButton: '#content > div > div.w > div > div.login-tab.login-tab-r > a',
        usernameInput: '#loginname',
        passwordInput: '#nloginpwd',
        loginButton: '#loginsubmit',
        checkinBtn: '#index-qian-btn',
        checkinSuccess: 'body > div.mem-sign.bag-popup > div.member-sign > div.sign-center > div > p',
      },
    },
    jd: {
      urls: {
        home: 'http://vip.jd.com',
      },
      elements: {
        gotoLogin: '#ttbar-login > a.link-login',
        usernameLoginButton: '#content > div > div.w > div > div.login-tab.login-tab-r > a',
        usernameInput: '#loginname',
        passwordInput: '#nloginpwd',
        loginButton: '#loginsubmit',
        // "1113"
        jingBean: '#userJdNum',
        checkinBtn: '#checkinBtn > i',
        checkinSuccess: 'body > div.ui-dialog.checkin-dialog.checkin.zoomIn.animated > div.ui-dialog-content > h2',
      },
    },
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
    v2ex: {
      urls: {
        home: 'https://www.v2ex.com/',
        signin: 'https://www.v2ex.com/signin',
        dailyMission: 'https://www.v2ex.com/mission/daily',
      },
      elements: {
        usernameInput: '#Main > div.box > div.cell > form > table > tbody > tr:nth-child(1) > td:nth-child(2) > input',
        passwordInput: '#Main > div.box > div.cell > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > input',
        loginButton: '#Main > div.box > div.cell > form > table > tbody > tr:nth-child(3) > td:nth-child(2) > input.super.normal.button',
        gotoDailySignin: '#Rightbar > div:nth-child(4) > div > a',
        dailySigninButton: '#Main > div.box > div:nth-child(2) > input',
        dailySigninResult: '#Main > div.box > div.message',
      },
    },
  },
  nightmare: {
    show: process.env.NODE_ENV === 'dev',
    webPreferences: {
      webSecurity: false,
      images: false,
    },
  },
};
