var glob = require('glob');
base_urls = {
  PRD: {
    Esika: {
      CL: 'https://esika.tiendabelcorp.cl/',
    },
    Cyzone: {
      CL: 'https://cyzone.tiendabelcorp.cl/',
    },
  },
  QAS: {
    Esika: {
      CL: 'https://uatesika.tiendabelcorp.cl/',
    },
    Cyzone: {
      CL: 'https://uatcyzone.tiendabelcorp.cl/',
    },
  }
};

var COUNTRIES = ['CL'];
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
              ",environment="+environment+",tags='@CL and not @QAS'" +

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