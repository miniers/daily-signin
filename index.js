const config = {
  site: process.env.SITE || 'smzdm',
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
};

const siteOperator = module.require(`./sites/${config.site}`);

siteOperator.run(config)
  .then(result => process.stdout.write(`\n  result: \n${JSON.stringify(result)}`))
  .catch(error => process.stderr.write(`\n  error: \n${error.message}`));
