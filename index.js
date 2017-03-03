const config = require('./config');

const siteOperator = module.require(`./sites/${config.site}`);

siteOperator.run()
  .end()
  .then(result => process.stdout.write(`\n  result: \n${JSON.stringify(result)}`))
  .catch(error => process.stderr.write(`\n  error: \n${error}`));
