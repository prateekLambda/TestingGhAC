var glob = require('glob');
base_urls = {
  PRD: {
    Esika: {
      CO: 'https://esika.tiendabelcorp.com.co/',
    },
    Cyzone: {
      CO: 'https://cyzone.tiendabelcorp.com.co/',
    },
  },
  QAS: {
    Esika: {
      CO: 'https://uatesika.tiendabelcorp.com.co/',
    },
    Cyzone: {
      CO: 'https://uatcyzone.tiendabelcorp.com.co/',
    },
  }
};

var COUNTRIES = ['CO'];
var BRANDS = ['Esika', 'Cyzone'];
var ENVIRONMENTS = ['PRD']

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
              ",environment="+environment+",tags='@CO and not @QAS'" +

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