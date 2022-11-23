require('dotenv').config({ path: './.env' });
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const quantity = 3;
const seller = 1;
const country = "CL"
const accountName = process.env.ACCOUNTNAME;
let environment = "tiendabelcorp.com";
let environmentPRD = "tiendabelcorp.cl"
let environmentPrice = "belcorp";
let environmentPricePRD = "belcorpchile";
let brand = process.env.BRAND;
let baseUrl =process.env.BASEURL
let appKey = process.env.APPKEYQAS;
let appToken = process.env.APPTOKENQAS;

let productSKU = [ "200111921", "200111919", "200095917", "200106290", "200098640", "200105179", "200103354" ]
let productSKUCy = [ "210089231", "200095738", "200095738", "200102761", "200093148" ]
let productSKULbel = [ "200111921", "200111919", "200095917", "200106290", "200098640", "200105179", "0000004" ]

let productSKUPRD = [ "200101406", "200095917", "200098757", "200096723", "200105178", "200095903", "200098640" ]
let productSKULbelPRD = [ "200106852", "200073557", "200098945", "200101110", "200108176", "200113082" ]
let productSKUCyPRD = [ "210098881", "200106357", "210098881", "200106389", "200105011", "200101383" ]

let fileNamePdp = '../../fixtures/itemsPdp.json';
let fileNamePdpPRD = '../../fixtures/itemsPdpPRD.json';

let fileNamePdpCy = '../../fixtures/itemsPdpCy.json';
let fileNamePdpCyPRD = '../../fixtures/itemsPdpCyPRD.json';

let fileNamePdpLbel = '../../fixtures/itemsPdpLbel.json';
let fileNamePdpLbelPRD = '../../fixtures/itemsPdpLbelPRD.json';

let fileName = '../../fixtures/product.json';
let fileNamePRD = '../../fixtures/productPRD.json';

let fileNameCy = '../../fixtures/productCy.json';
let fileNameCyPRD = '../../fixtures/productCyPRD.json';

let fileNameLbel = '../../fixtures/productLbel.json';
let fileNameLbelPRD = '../../fixtures/productLbelPRD.json';


  if (accountName == "uatesika") {
    // brand = "Esika"
    // baseUrl = "https://uatesika.tiendabelcorp.com/"
  }

  if (accountName == "uatlbel") {
    // brand = "Lbel"
    // baseUrl = "https://uatlbel.tiendabelcorp.com/"
    fileNamePdp = fileNamePdpLbel
    fileName = fileNameLbel
    productSKU = productSKULbel
  }

  if (accountName == "uatcyzone") {
    // brand = "Cyzone"
    // baseUrl = "https://uatcyzone.tiendabelcorp.com/"
    fileNamePdp = fileNamePdpCy
    fileName = fileNameCy
    productSKU = productSKUCy
  }

  if (accountName == "esika") {
    // brand = "Esika"
    // baseUrl = "https://esika.tiendabelcorp.cl/"
    environment = environmentPRD
    environmentPrice = environmentPricePRD
    appKey = process.env.APPKEYPRD
    appToken = process.env.APPTOKENPRD
    fileNamePdp = fileNamePdpPRD
    fileName = fileNamePRD
    productSKU = productSKUPRD
  }

  if (accountName == "lbel") {
    // brand = "Lbel"
    // baseUrl = "https://lbel.tiendabelcorp.cl/"
    environment = environmentPRD
    environmentPrice = environmentPricePRD    
    appKey = process.env.APPKEYPRD
    appToken = process.env.APPTOKENPRD
    fileNamePdp = fileNamePdpLbelPRD
    fileName = fileNameLbelPRD
    productSKU = productSKULbelPRD
  }

  if (accountName == "cyzone") {
    // brand = "Cyzone"
    // baseUrl = "https://cyzone.tiendabelcorp.cl/"
    environment = environmentPRD
    environmentPrice = environmentPricePRD
    appKey = process.env.APPKEYPRD
    appToken = process.env.APPTOKENPRD
    fileNamePdp = fileNamePdpCyPRD
    fileName = fileNameCyPRD
    productSKU = productSKUCyPRD
  }


let filePdp = fileNamePdp.toString()
let file = fileName.toString()
const fileLambdaTest = '../../../lambdatest-config.json';
const fileLT= fileLambdaTest.toString()
const fileCypressConfig = '../../../cypress.json'


const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',    
    'X-VTEX-API-AppKey': appKey,
    'X-VTEX-API-AppToken': appToken
  }
};

async function sendToProductJson() {
  try {
    const getBuildName= await addBuildName(fileLT)
    const getBaseUrl= await addCypressSettings(fileCypressConfig)
    const getSkuArray = await hasQuantityNotPromotion(accountName, environment, productSKU, appKey, appToken, quantity, seller, country);
    const getProductJson = await getProductItems(accountName, environment, options, getSkuArray, file)
    const getPdpJson = await getPdpItems(accountName, environment, environmentPrice, options, getSkuArray,filePdp)
  } 
   catch (error) {
     return 'Error: ' + error;
  }
}
sendToProductJson()

async function hasQuantityNotPromotion(accountName, environment, productSKU, appKey, appToken, quantity, seller, country) {
  let productSkuCheck = [];
  for await (const sku of productSKU) {
    const urlQuantityNotPromotion = `https://${accountName}.${environment}/api/checkout/pub/orderForms/simulation?RnbBehavior=0`;
    const optionsPost = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-VTEX-API-AppKey': appKey,
        'X-VTEX-API-AppToken': appToken
      },
      body: JSON.stringify({items: [{id: sku, quantity: quantity, seller: seller}], country: country})
    };

      const response = await fetch(urlQuantityNotPromotion, optionsPost);
      const data = await response.json();
      // console.log(data.selectableGifts)

        if (data.items[0].quantity >= quantity && data.selectableGifts.length <= 1) {
          productSkuCheck.push([sku, data.items[0].sellingPrice])
        }
        if (productSkuCheck.length == 2) {          
          console.log("🚀 ~ file: setupData.js ~ line 60 ~ forawait ~ productSkuCheck", productSkuCheck)  
          return productSkuCheck
        }
      }  
}
// hasQuantityNotPromotion(accountName, productSKU, appKey, appToken, quantity, seller, country)

async function getProductItems(accountName, environment, options, productSkuCheck, file) {
  let countStart = 0;
  for await (const sku of productSkuCheck) {
    const urlProductItems = `https://${accountName}.${environment}/api/catalog_system/pvt/sku/stockkeepingunitbyid/${sku[0]}`;
    const response = await fetch(urlProductItems, options);
    const data = await response.json();
    
    var productObj = {
      "brand": data.BrandName,
      "Product": data.NameComplete,
      "SKU": sku[0],
      "urlBaseCart": `https://${accountName}.${environment}`+ data.DetailUrl,
      "url": `//${accountName}.${environment}` + data.DetailUrl,
      "imgUrl": data.ImageUrl,
      "couponValid": "ESIKA10",
      "couponInvalid": "NCP-Brinde",
    }
    
  fs.readFile(path.resolve(__dirname, file), function (err, data) {
    var itemJson = JSON.parse(data)
    itemJson.splice(countStart, 1, productObj)
    fs.writeFileSync(path.resolve(__dirname, file), JSON.stringify(itemJson, null, 4))
    countStart++ 
    })
  }
}
// getProductItems(options, file)

async function getPdpItems(accountName, environment, environmentPrice, options, productSkuCheck, filePdp) {
  
  let sku = productSkuCheck;
  
    const urlProductItems = `https://${accountName}.${environment}/api/catalog_system/pvt/sku/stockkeepingunitbyid/${sku[0][0]}`;
    const response = await fetch(urlProductItems, options);
    const data = await response.json();

    const urlProductItems2 = `https://${accountName}.${environment}/api/catalog_system/pvt/sku/stockkeepingunitbyid/${sku[1][0]}`;
    const response2 = await fetch(urlProductItems2, options);
    const data2 = await response2.json();

    const urlPdpItems = `https://api.vtex.com/${environmentPrice}/pricing/prices/${sku[0][0]}`
    const responsePdp = await fetch(urlPdpItems, options);
    const dataPdp = await responsePdp.json();
    var pdpObj = [
      [
         {
           "pdpUrl": `https://${accountName}.${environment}${data.DetailUrl}`,
           "pdpUrl2": `https://${accountName}.${environment}${data2.DetailUrl}`,
           "pdpUrlMTO": `https://${accountName}.${environment}${data.DetailUrl}?utmi_cp=RodrigoSalgado`,           
           "pdpUrlstampsMTO": "https://uatesika.tiendabelcorp.com/vibranza-perfume-de-mujer/p?utmi_cp=TienditaLiam",
           "pdpUrlstamps": "https://uatesika.tiendabelcorp.com/vibranza-perfume-de-mujer/p"
         }
      ],
      [
         {
           "productName": data.NameComplete  + ' ',
           "fixedBarBtnText": "Agregar a la bolsa",
           "originalPrice": "$" + dataPdp.listPrice.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."),
           "currentPrice": "$" + dataPdp.costPrice.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."),
           "sellingPrice": "$" + sku[0][1].toString().slice(0, -2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."),
           "currentPriceSign": "$"
         }
      ],
      [
        {
          "commentBtnText": "Escribe un comentario",
          "imageSrc": `https://belcorp.vtexassets.com/arquivos/ids/${data.ImageUrl.substring(44, 50)}`,
          "imageMobileSrc": `https://belcorp.vtexassets.com/arquivos/ids/${data.ImageUrl.substring(44, 50)}`,
          "imageSrcStamp": `https://belcorp.vtexassets.com/arquivos/ids/157961`,
          "imageMobileSrcStamp": `https://belcorp.vtexassets.com/arquivos/ids/157961`,
          "stampText": "Best seller"
        }
      ]
    ]      
      fs.writeFileSync(path.resolve(__dirname, filePdp), JSON.stringify(pdpObj, null, 4))

      console.log("itemsPdp.json was updated")
      return;
}


function getTodayDate() {
    return new Promise(resolve => {
      var date = new Date(),
        minutes = date.getMinutes().toString(),
        minutesF = minutes.length == 1 ? '0' + minutes : minutes,
        hour =  date.getHours().toString(),
        hourF = hour.length == 1 ? '0' + hour : hour,
        day = date.getDate().toString();
        dayF = day.length == 1 ? '0' + day : day,
        month = (date.getMonth() + 1).toString(),
        monthF = month.length == 1 ? '0' + month : month,
        yearF = date.getFullYear();
      const today = dayF + '_' + monthF + '_' + yearF +'_'+hourF+"_"+minutesF;
      resolve(today);
      // console.log(`Today is: ${today}`)
    });
  }

async function addBuildName(file){
    const today = await getTodayDate();
    fs.readFile(path.resolve(__dirname, file), function (err, data) {
        var itemJson = JSON.parse(data)
        itemJson.run_settings.build_name = `Automation_Frontend_QA_Regression_${today}_${process.env.country}_${process.env.brand}_${process.env.environment}`
        // console.log(itemJson.run_settings.build_name)
        fs.writeFileSync(path.resolve(__dirname, file), JSON.stringify(itemJson, null, 4))
        })
}

async function addCypressSettings(file){
  fs.readFile(path.resolve(__dirname, file), function (err, data) {
    var itemJson = JSON.parse(data)
      itemJson.baseUrl = `${process.env.baseUrl}`
      itemJson.env.country = `${process.env.country}`
      itemJson.env.brand = `${process.env.brand}`
      itemJson.env.environment = `${process.env.environment}`
      itemJson.env.TAGS = `${process.env.tags}`
      // console.log(itemJson.run_settings.build_name)
      fs.writeFileSync(path.resolve(__dirname, file), JSON.stringify(itemJson, null, 4))
      })
}
// addBuildName(file)

