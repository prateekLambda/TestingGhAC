var glob = require('glob');
base_urls = {
  PRD: {
    Esika: {
      MX: 'https://esika.tiendabelcorp.com.mx/',
    },
    Cyzone: {
      MX: 'https://cyzone.tiendabelcorp.com.mx/',
    },
    Lbel: {
      MX: 'https://lbel.tiendabelcorp.com.mx/',
    }
  },
  QAS: {
    Esika: {
      MX: 'https://uatesika.tiendabelcorp.com.mx/',
    },
    Cyzone: {
      MX: 'https://uatcyzone.tiendabelcorp.com.mx/',
    },
    Lbel: {
      MX: 'https://uatlbel.tiendabelcorp.com.mx/',
    }
  }
};

var COUNTRIES = [process.env.country];
var BRANDS = [process.env.brand, 'Cyzone'];
var ENVIRONMENTS = [process.env.environment]

function getConfig() {
  glob('cypress/integration/**/*.feature', {}, function (er, files) {
    let commands = '';
    for (var country of COUNTRIES) {
      for (var brand of BRANDS) {
        for (var environment of ENVIRONMENTS){
          for (i = 0; i < files.length; i++) {
            commands +=
              ' --env country=' +
              country +
              ',brand=' +
              brand +
              ",environment="+environment+",tags='@MX and not @QAS'" +

              ' --spec=' +
              files[i] +
              ' --config baseUrl=' +
              base_urls[environment][brand][country] +
              ' --reporter mochawesome --reporter-options reportFilename='+country+'_'+brand+'_'+environment+'_'+',reportDir=cypress/results,json=true' +
              ' \n';
          }
        }
      }
    }
    console.log(commands);
  });
}

getConfig();