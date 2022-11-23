# cypress-cucumber
QA Belcorp: Integration Cypress > Lambdatest > Testrail

![Cypress](https://www.cypress.io/static/33498b5f95008093f5f94467c61d20ab/59c46/cypress-logo.webp)  
![TestRail Logo](https://media.gurock.com/gk-media/logos/testrail-logo-with-tagline.png)  
![LambdaTest Logo](https://www.lambdatest.com/resources/images/logos/logo.svg)

## run test
npm install

lambdatest-cypress run

or

npx cypress open (Bash)

or

npm run cy:dashboard (Cypress Dashboard AND Add to Testrail)

or

# FULL CYCLE
# 1: Set cypress.json manually:
    "baseUrl": "SEE_ITEM_7",
    "env": {
        "country": "CL",
        "brand": "Esika",
        "environment": "PRD" or "QAS",
        "TAGS": "@CL and not @QAS", --> Just set the country when running on QAS
  }  
# 2: Terminal and run the follow command to update json data files:
    node cypress/integration/Settings/setupData.js
# 3: Terminal: start Lambdatest Regression
    lambdatest-cypress run --sync=true
# 4: Terminal: update session id
    node functions/sessionId.js
# 5: Terminal: generate report
    lambdatest-cypress generate-report \
    --user=LT_USERNAME \
    --access_key=LT_ACCESS_KEY \
    --sid=SESSION_ID
# 6: Terminal: send results to Testrail
    node functions/fromLambdaToTestRail.js

# 7 baseUrl 
i.e.:
PRD
Ésika: https://esika.tiendabelcorp.cl/	
Cyzone: https://cyzone.tiendabelcorp.cl/
L'bel: https://lbel.tiendabelcorp.cl/	
Cart/Checkout: https://compra.tiendabelcorp.cl/	

QAS
https://uatesika.tiendabelcorp.cl/
https://uatlbel.tiendabelcorp.cl/
https://uatcyzone.tiendabelcorp.cl/
https://uatcompra.tiendabelcorp.cl/checkout