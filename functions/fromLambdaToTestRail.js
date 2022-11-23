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

const mainFolder = `./lambdatest-artefacts/${sessionId}/${browserName}/${browserVersion}/`;
const mochawesomeJsonFile = '/results/mochawesome/mochawesome.json';
var Testrail = require('testrail-api');

var testrail = new Testrail({
  host: 'https://belcorpla.testrail.io/',
  user: process.env.TR_USER,
  password: process.env.TR_PASSWORD,
});

async function fromLambdaToTestRail() {
  try {
    const subFoldersNames = await getSubFoldersList(mainFolder);
    const today = await getTodayDate();
    const resultsToTestrail = await getTestResultstoTestRail(
      mainFolder,
      subFoldersNames,
      mochawesomeJsonFile,
      testrail,
      sessionId
    );
    const caseIds = await getCaseIds(resultsToTestrail);
    console.log(`Test Cases id's: ${caseIds}`)
    const runId = await addRunToTestrail(projectId, suiteId, today, caseIds, cypressConfig.env.country,cypressConfig.env.brand, cypressConfig.env.environment);
    const result = await sendResultsToTestaRailBulk(
      testrail,
      resultsToTestrail,
      sessionId,
      runId
    );
  } catch (error) {
    return 'Error: ' + error;
  }
}

fromLambdaToTestRail();

function getSubFoldersList(mainFolder) {
  return new Promise(resolve => {
    let subFoldersNames = [];
    fs.readdir(mainFolder, (err, subFolders) => {
      if (err) return console.log(err);
      subFolders.forEach(subFolderName => {
        subFoldersNames.push(subFolderName);
      });
      resolve(subFoldersNames);
      // console.log(`SubFolder Log: ${subFoldersNames}`)
    });
  });
}

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

function getTestResultstoTestRail(mainFolder, subFoldersNames, mochawesomeJsonFile) {
  return new Promise(resolve => {
    let resultsToTestrailJson = [];
    for (let i = 0; i < subFoldersNames.length; i++) {
      let getReportFile = fs.readFileSync(
        path.resolve(
          __dirname,
          '.' + mainFolder + subFoldersNames[i] + mochawesomeJsonFile
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
              case_id: testCaseId,
              status_id: testCaseStatus,
              comment: `https://automation.lambdatest.com/test/?testID=${subFoldersNames[i]}`,
            });
        }        
        // console.log(`test id ${testCaseId} y status${testCaseStatus}`)
      }
    }
    resolve(resultsToTestrailJson);
    // console.log(resultsToTestrailJson)
  });
}

function getCaseIds(resultsToTestrail) {
  return new Promise(resolve => {
    let caseIds = [];
    resultsToTestrail.forEach(element => {
      if(element.status_id != 6) {      
        caseIds.push(element.case_id);
      }
    });
    resolve(caseIds);
    // console.log(caseIds)
  });
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
        // console.log(`The number of RunId${run}`)
      }
    );
  });
}

function sendResultsToTestaRailOnebyOne(testrail, resultsToTestrail, sessionId, runId) {
  return new Promise(resolve => {
    resultsToTestrail.map(jsonObj => {
      testrail.addResultForCase(
        /*RUN_ID=*/ runId,
        /*CASE_ID=*/ jsonObj.case_id,
        /*CONTENT=*/ {
          status_id: jsonObj.status_id,
          comment: jsonObj.comment,
        },
        (err, response, result) => {
          resolve(result);
          console.log(`The error was: ${err}`)
        }
      );
    }, testrail);

    // Delete session reports folder
    fs.rmSync(`./lambdatest-artefacts/${sessionId}`, { recursive: true });
    console.log('Done');
    return 'Done';
  });
}

function sendResultsToTestaRailBulk(testrail, resultsToTestrail, sessionId, runId) {
  return new Promise(resolve => {
    testrail.addResultsForCases(/*RUN_ID=*/runId, /*CONTENT=*/resultsToTestrail, (err, response, results) => {
      resolve(results);
      console.log(`The error was: ${JSON.stringify(err)}`)
    }, testrail);
    // Delete session reports folder
    fs.rmSync(`./lambdatest-artefacts/${sessionId}`, { recursive: true });
    console.log('Done');
    return 'Done';
  });
}
