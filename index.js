const config = require('./config');

const siteOperator = module.require(`./sites/${config.site}`);

siteOperator.run()
  .end()
  .then(result => process.stdout.write(`\n  result: \n${JSON.stringify(result)}`));
