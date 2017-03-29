/* eslint no-console: ["error", { allow: ["error"] }]  */
const sites = JSON.parse(process.env.SITE);

sites.forEach((site) => {
  const siteOperator = module.require(`./sites/${site.name}`);
  siteOperator.run(site.username,site.password)
        .catch((error) => {
            console.error(site.name,' CATCH ERROR: ', error);
            process.exit(1);
        })
        .then(result => process.stdout.write(`\n  ${site.name} result: \n${JSON.stringify(result)}`));
});

