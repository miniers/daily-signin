const config = {
  site: process.env.SITE,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
};

const siteOperator = module.require(`./sites/${config.site}`);

siteOperator(config);
