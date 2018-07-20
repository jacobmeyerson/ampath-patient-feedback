// TODO: sanitize inputs

'use strict';

const SURVEYFILE = './surveys.json';

const Hapi = require('hapi');
const mysql = require('mysql');
const request = require('request');
const routes = require('./routes');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'jacob922',
  database : 'patient_feedback2'
});

const server = Hapi.Server({
  port: 3000,
  host: 'localhost',
  routes: {
    cors: true
  }
});


// builds a query to insert appropriate number of rows into surveyResponse table
const surveyResponse_query_constructor = (surveyResponse, surveyEncounterId) => {
  const responseValue_constructor = (surveyEncounterId) => (question) => (answer) =>
    "('"+surveyEncounterId+"','"+question+"','"+answer+"')";
  const responseValue_surveySpecific = responseValue_constructor(surveyEncounterId);
  const queryInit = (responseValues) => 
                      'INSERT INTO surveyResponse (surveyEncounter_surveyEncounterId, question, answer) VALUES ' + 
                      responseValues + ';';
  
  var responseValueArray = [];
  for (var question in surveyResponse) {
    if (!Array.isArray(surveyResponse[question])) {
      responseValueArray.push(responseValue_surveySpecific(question)(surveyResponse[question]));
    } else {
      const responseValue_questionSpecific = responseValue_surveySpecific(question);
      for (var answer of surveyResponse[question]) {
        responseValueArray.push(responseValue_questionSpecific(answer));
      }
    }
  }

  return queryInit(responseValueArray.join())
};

const surveyEncounter_query_constructor = (surveyEncounterInfo) => {
  const surveyEncounter_query = `INSERT INTO surveyEncounter
                                (surveyId, location, date, department, clinicalProgramId) VALUES
                                ('${surveyEncounterInfo.surveyId}',
                                 '${surveyEncounterInfo.location}',
                                 '${surveyEncounterInfo.date}',
                                 '${surveyEncounterInfo.department}',
                                 '${surveyEncounterInfo.clinicalProgramId}');`;
  return surveyEncounter_query;
};

const validate = async (_request, username, password) => {
  var authBuffer = new Buffer(username + ":" + password).toString("base64");
  var headers = {'Authorization': "Basic " + authBuffer};
 
  return new Promise(
    (resolve, reject) => {
      if (username === 'bob') resolve({isValid: true, credentials: {}})
      else resolve({isValid: false, credentials: {}})});
    // when test-amrs is working, comment out above 2 lines, uncomment below lines
    //   var callback = (error, response, _body) => {
    //     if (error) reject(error);
    //     const data = JSON.parse(response.body);
    //     resolve({isValid: data.authenticated, credentials: {}});
    //   }

    //   request(
    //     { method: 'GET',
    //       url: 'https://ngx.ampath.or.ke/test-amrs/ws/rest/v1/session/',
    //       headers: headers
    //     }, callback
    //   );
    // });
  };

server.route({
  method: 'GET',
  path: '/getSurveys',
  handler: function(request, h) { 
    return h.file(SURVEYFILE);
  }
});

server.route({
  method: 'POST',
  path: '/storeSurveys',
  handler: function(request, h) {
    return new Promise(
      (resolve, reject) => {
        connection.query(
          surveyEncounter_query_constructor(request.payload.encounterInfo),
          (error, _rows, _fields) => {
            if (error) {reject(error)}
          }
        );
        connection.query(
          'SELECT LAST_INSERT_ID();',
          (error, rows, _fields) => {
            if (error) {reject(error)}
            const surveyEncounterId = rows[0]["LAST_INSERT_ID()"];
            const surveyResponse_query = surveyResponse_query_constructor(request.payload.responseInfo, surveyEncounterId);
            
            connection.query(
              surveyResponse_query,
              (error, rows, _fields) => {
                if (error) {reject(error)}
              }
            );
          }
        );
      }
    );
  }
});


const init = async () => {
  connection.connect();
  
  await server.register([
    {plugin: require('hapi-auth-basic')},
    {plugin: require('inert')}
  ]);

  server.auth.strategy('simple', 'basic', { validate });

  for (var route of routes.routesFxn(connection)) {
    server.route(route);
  }

  // causes all routes to require authentication
  server.auth.default('simple');

  await server.start();
  console.log('Server is running');
}

init();

// Upon ctrl-c, mysql connection is closed, and server is shut down.
process.on('SIGINT', () => {
  connection.end();
  process.exit();
});
