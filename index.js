const CONFIG = {
  SITE: process.env.SITE,
  USERNAME: process.env.USERNAME,
  PASSWORD: process.env.PASSWORD,
};

const siteOperator = module.require(`./sites/${CONFIG.SITE}`);

siteOperator();
