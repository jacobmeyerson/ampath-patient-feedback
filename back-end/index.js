// TODO: sanitize inputs

'use strict';

const SURVEYFILE = './surveys.json';

const Hapi = require('hapi');
const mysql = require('mysql');

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
    const payload = request.payload.encounterInfo;

    const surveyId = payload.surveyId;
    const location = payload.location;
    const date = payload.date;
    const department = payload.department;
    const clinicalProgramId = payload.clinicalProgramId;
    const surveyEncounter_query = `INSERT INTO surveyEncounter
                                  (surveyId, location, date, department, clinicalProgramId) VALUES
                                  ('${surveyId}','${location}','${date}','${department}','${clinicalProgramId}');`;

    return new Promise(
      (resolve, reject) => {
        connection.query(
          surveyEncounter_query,
          (error, _rows, _fields) => {
            if (error) {console.log(error); reject(error)}
          }
        );
        connection.query(
          'SELECT LAST_INSERT_ID();',
          (error, rows, _fields) => {
            if (error) {console.log(error); reject(error)}
            const surveyEncounterId = rows[0]["LAST_INSERT_ID()"];
            const surveyResponse_query = surveyResponse_query_constructor(request.payload.responseInfo, surveyEncounterId);
            
            connection.query(
              surveyResponse_query,
              (error, rows, _fields) => {
                if (error) {console.log(error); reject(error)}
              }
            );
          }
        );
      }
    );
  }
});


server.route({
  method: 'GET',
  path: '/test',
  handler: function(request, h) { 
    const query1 = 'SELECT * FROM surveyResponse';
    return new Promise(
      (resolve, reject) => {
        connection.query(
          'SELECT * FROM surveyEncounter; SELECT * FROM surveyResponse',
          (error, rows, _fields) => {
            resolve(rows);
          });
      }
    );
  }
});



const init = async () => {
  connection.connect();

  await server.register({
    plugin: require('inert')
  });

  await server.start();
  console.log('Server is running');
}

init();

// Upon ctrl-c, mysql connection is closed, and server is shut down.
process.on('SIGINT', () => {
  connection.end();
  process.exit();
});

