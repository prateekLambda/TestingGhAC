const URLS = {
  "QAS":{
    "Esika":{
      "CL":"https://uatesika.tiendabelcorp.com/",
      "CO":"https://uatesika.tiendabelcorp.com.co/",
      "MX":"https://uatesika.tiendabelcorp.com.mx/",
      "PE":"https://uatesika.tiendabelcorp.com.pe/",
      "PA":"https://uatesika.tiendabelcorp.com.pa/",
      "EC":"https://uatesika.tiendabelcorp.com.ec/",
    },
    "Cyzone":{
      "CL":"https://uatcyzone.tiendabelcorp.com/",
      "CO":"https://uatcyzone.tiendabelcorp.com.co/",
      "MX":"https://uatcyzone.tiendabelcorp.com.mx/",
      "PE":"https://uatcyzone.tiendabelcorp.com.pe/",
      "PA":"https://uatcyzone.tiendabelcorp.com.pa/",
      "EC":"https://uatcyzone.tiendabelcorp.com.ec/",
    },
    "Lbel":{
      "CL":"https://uatlbel.tiendabelcorp.com/",
      "CO":"https://uatlbel.tiendabelcorp.com.co/",
      "MX":"https://uatlbel.tiendabelcorp.com.mx/",
      "PE":"https://uatlbel.tiendabelcorp.com.pe/",
      "PA":"https://uatlbel.tiendabelcorp.com.pa/",
      "EC":"https://uatlbel.tiendabelcorp.com.ec/",
    }
  },
  "PRD":{
    "Esika":{
      "CL":"https://esika.tiendabelcorp.cl/",
      "CO":"https://esika.tiendabelcorp.com.co/",
      "MX":"https://esika.tiendabelcorp.com.mx/",
      "PE":"https://esika.tiendabelcorp.com.pe/",
      "PA":"https://esika.tiendabelcorp.com.pa/",
      "EC":"https://esika.tiendabelcorp.com.ec/",
    },
    "Cyzone":{
      "CL":"https://cyzone.tiendabelcorp.cl/",
      "CO":"https://cyzone.tiendabelcorp.com.co/",
      "MX":"https://cyzone.tiendabelcorp.com.mx/",
      "PE":"https://cyzone.tiendabelcorp.com.pe/",
      "PA":"https://cyzone.tiendabelcorp.com.pa/",
      "EC":"https://cyzone.tiendabelcorp.com.ec/",
    },
    "Lbel":{
      "CL":"https://lbel.tiendabelcorp.cl/",
      "CO":"https://lbel.tiendabelcorp.com.co/",
      "MX":"https://lbel.tiendabelcorp.com.mx/",
      "PE":"https://lbel.tiendabelcorp.com.pe/",
      "PA":"https://lbel.tiendabelcorp.com.pa/",
      "EC":"https://lbel.tiendabelcorp.com.ec/",
    }
  }
}

module.exports = ({context, core}) => {
  const COUNTRY = process.env.country;
  const ENV = process.env.environment;
  const BRAND = process.env.brand;
  let vtexBaseUrl =  URLS[ENV][BRAND][COUNTRY]

  core.exportVariable('vtex_base_url', vtexBaseUrl)
  return vtexBaseUrl
  
}
