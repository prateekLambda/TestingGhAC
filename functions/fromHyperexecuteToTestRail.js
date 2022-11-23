require('dotenv').config({ path: './.env' });
const path = require('path');
const fs = require('fs');
const getSessionId = require('../lambdatest_run.json');
const sessionId = getSessionId.session_id;
const getSuiteProjectId = require('../lambda-testrail-config.json');
const lambdatestConfig = require('../lambdatest-config.json');
const cypressConfig = require('../cypress.json');
const browserName = lambdatestConfig.browsers[0].browser;
const browserVersion = lambdatestConfig.browsers[0].versions[0];
const projectId = getSuiteProjectId.project_id;
const suiteId = getSuiteProjectId.suite_id;
const milestoneId = getSuiteProjectId.milestone_id;
const _ = require('lodash') 

const mainFolder = `./artifacts/Reports/`;
const mochawesomeJsonFile = '/cypress/results/PE_Cyzone.json';
var Testrail = require('testrail-api');
const { isNull, forEachRight, forEach } = require('lodash');

var testrail = new Testrail({
  host: 'https://belcorpla.testrail.io/',
  user: process.env.TR_USER,
  password: process.env.TR_PASSWORD,
});

function getTodayDate() {
    return new Promise(resolve => {
      var date = new Date(),
        day = date.getDate().toString(),
        dayF = day.length == 1 ? '0' + day : day,
        month = (date.getMonth() + 1).toString(),
        monthF = month.length == 1 ? '0' + month : month,
        yearF = date.getFullYear();
      const today = dayF + '/' + monthF + '/' + yearF;
      resolve(today);
      // console.log(`Today is: ${today}`)
    });
  }
  
function getSubFoldersList(mainFolder) {
    //return new Promise(resolve => {
      let subFoldersNames = [];
      subFoldersNames = fs.readdirSync(mainFolder).filter(function(x) {
        return x !== '.DS_Store' && x !== 'ignore-other-file.js';
      });
      return subFoldersNames;
    //});
}

function readFile(folderPath, extension){ 
    let jsonFiles = []
    const results = fs.readdirSync(folderPath) 
    const files = results.filter(res => fs.lstatSync(path.resolve(folderPath, res)).isFile())
    files.forEach(file => {
        // console.log(file)
        if (path.extname(file) == extension){
            jsonFiles.push(file)
        }
    })

    // ['json'].includes(file.split('.').pop())

    // file.endsWith(extname)
    return jsonFiles
}

function getArrayFiles(mainFolder) {
    try {
        let filesArray = []
        //console.log('Inicio')
        const subFoldersNames = getSubFoldersList(mainFolder);
        // console.log(subFoldersNames.length)
        for (let i = 0; i < subFoldersNames.length; i++) {
            // console.log(`.${mainFolder}${subFoldersNames[i]}/cypress/results`)
            const files = readFile(path.resolve(__dirname,`.${mainFolder}${subFoldersNames[i]}/cypress/results`), '.json')
            files.forEach(file => {
                let arrayCountry = []
                let properties = file.split('_')
                // console.log(properties)
                properties.forEach(name =>{
                    arrayCountry.push(name)
                })
                filesArray.push({
                    country : arrayCountry[0],
                    brand : arrayCountry[1],
                    environment : arrayCountry[2],
                    path: `.${mainFolder}${subFoldersNames[i]}/cypress/results`,
                    file: file,
                    fullPath: `.${mainFolder}${subFoldersNames[i]}/cypress/results/${file}`
                })
            })
        }
      //console.log(filesArray)
      // console.log(arrayCountry)
      // const uniqueCars =  [...new Set(arrayCountry)];;
      //console.log(uniqueCars)

      return filesArray
    } catch (error) {
      return 'Error: ' + error;
    }

}

function getCountriesBrandsEnvironments(files) {
    // return new Promise(resolve => {
      let runsId = [];
      files.forEach(element => {
        runsId.push({
            country: element.country,
            brand : element.brand,
            environment: element.environment
        });
      });
      // console.log (runsId)
      let set = new Set, results = [];
        for (let list of runsId) {
            let id = Object.values(list).join('');
            if (!set.has(id)) {
                set.add(id);
                results.push(list);
            }
        }
      return results
      //resolve(caseIds);
      // console.log(caseIds)
    //});
}

function getTestResultstoTestRail(arrayFiles) {
    //return new Promise(resolve => {
      let resultsToTestrailJson = [];
      for (let i = 0; i < arrayFiles.length; i++) {
        let getReportFile = fs.readFileSync(
          path.resolve(
            __dirname,
            arrayFiles[i].fullPath
          )
        );
        let reportFile = JSON.parse(getReportFile);
  
        for (let j = 0; j < reportFile.results[0].suites[0].tests.length; j++) {
          let str = reportFile.results[0].suites[0].tests[j].title;
          let testCaseId = str.substring(0, str.indexOf(' '));
          let testCaseStatus = reportFile.results[0].suites[0].tests[j].state;
          if (testCaseStatus == 'passed') testCaseStatus = 1;
          if (testCaseStatus == 'failed') testCaseStatus = 5;
          if (testCaseStatus == 'skipped' || testCaseStatus == 'pending'  ) testCaseStatus = 6;
  
          if (testCaseStatus !=6){
              resultsToTestrailJson.push({
                country : arrayFiles[i].country,
                brand : arrayFiles[i].brand,
                environment : arrayFiles[i].environment,
                case_id: testCaseId,
                status_id: testCaseStatus,
                comment: `https://automation.lambdatest.com/test/?testID=`,
              });
          }        
          // console.log(`test id ${testCaseId} y status${testCaseStatus}`)
        }
      }
      return resultsToTestrailJson
      // console.log(resultsToTestrailJson)
    //});
}

function getCaseIds(arrayTestCases) {
    // return new Promise(resolve => {
      let caseIds = [];

      for(let i=0; i< arrayTestCases.length; i++){
        
        caseIds.push(arrayTestCases[i].case_id)
      }
    //   resultsToTestrail.forEach(element => {
    //     if(element.status_id != 6) {      
    //       caseIds.push(element.case_id);
    //     }
    //   });

      return caseIds
      // resolve(caseIds);
      // console.log(caseIds)
    // });
}

function getCasesRunIdCaseIds(runArray, arrayTestCases ){

    // runArray = [
    //     { country: 'PE', brand: 'Cyzone', environment: 'PRD', runId: 2868 },
    //     { country: 'PE', brand: 'Esika', environment: 'PRD', runId: 2869 }
    //   ]
    let newArray =[]
    // console.log(`${newArray.length} ${arrayTestCases.length}` )
    for (var j = 0; j < runArray.length; j++) {
      for (var k = 0; k < arrayTestCases.length; k++) {
        if (
          arrayTestCases[k].country === runArray[j].country &&
          arrayTestCases[k].brand === runArray[j].brand &&
          arrayTestCases[k].environment === runArray[j].environment
        ) {
          newArray.push({
            id: `${runArray[j].country}${runArray[j].brand}${runArray[j].environment}`  ,
            testCaseId: arrayTestCases[k],
          });
        }
      }
    }
    // console.log(newArray)
    var finalArray = Object.values(newArray.reduce((a, { id, testCaseId }) => {
        if (!a[id]) a[id] = { id, testCaseId: [] };
            a[id].testCaseId.push(testCaseId);
            return a;
        }, {}
      )
    )
    
    // const finalArray = _.groupBy(newArray, runId => runId.runId);
    return finalArray

}
function addRunToTestrail(projectId, suiteId, today, caseIds, country, brand, environment ) {
    return new Promise(resolve => {
    testrail.addRun(
        /*PROJECT_ID=*/ projectId,
        /*CONTENT=*/ {
          suite_id: suiteId,
          name: `Automation_Regression_${today}_${country}_${brand}_${environment}`,
          milestone_id: milestoneId,
          include_all: false,
          case_ids: caseIds,
        },
        function (err, response, run) {
          resolve(run.id);
          // console.log(`The number of RunId ${run.id}`)
        }
      );
     });
}

  
async function fromLambdaToTestRail() {
  try {

    const today = await getTodayDate();
    const files = getArrayFiles(mainFolder);
    const arrayExecutions = getCountriesBrandsEnvironments(files);
    const arrayTestCases = getTestResultstoTestRail(files);
    var finalArray = getCasesRunIdCaseIds(arrayExecutions, arrayTestCases);
    let newArray = [];

    for (let i = 0; i < arrayExecutions.length; i++) {
      // console.log(`${arrayExecutions[i].country}`)
      let casesIds = getCaseIds(finalArray[i].testCaseId);
  
      let runId = await addRunToTestrail(
        projectId,
        suiteId,
        today,
        casesIds,
        arrayExecutions[i].country,
        arrayExecutions[i].brand,
        arrayExecutions[i].environment
      );
      newArray.push({
        id: `${arrayExecutions[i].country}${arrayExecutions[i].brand}${arrayExecutions[i].environment}`,
        runId: runId,
      });
    }

    for (let i = 0; i < finalArray.length; i++) {
      let runId = newArray.find(el => el.id === finalArray[i].id);
      if (runId != undefined) {
        console.log(`Run id is${runId.runId}`);
        //console.log(finalArray[i].testCaseId)
        await sendResultsToTestaRailBulk(testrail, finalArray[i].testCaseId, runId.runId);
      }
    }
  } catch (error) {
    return 'Error: ' + error;
  }
}

function sendResultsToTestaRailBulk(testrail, resultsToTestrail, runId) {
    return new Promise(resolve => {
      testrail.addResultsForCases(/*RUN_ID=*/runId, /*CONTENT=*/resultsToTestrail, (err, response, results) => {
        resolve(results);
        console.log(`The error was: ${JSON.stringify(err)}`)
      }, testrail);
      // Delete session reports folder
      // fs.rmSync(`./lambdatest-artefacts/${sessionId}`, { recursive: true });
      console.log('Done');
      return 'Done';
    });
  }
  


  
fromLambdaToTestRail();

