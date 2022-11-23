require('dotenv').config({ path: '../.env' });
const runFile = require('../lambdatest_run.json');
const sessionId = runFile.session_id;
console.log(sessionId)