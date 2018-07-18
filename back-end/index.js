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

const responseValue_constructor = (surveyEncounterId) => (question) => (answer) => {
  return "('"+surveyEncounterId+"','"+question+"','"+answer+"')";
};


// console.log(queryInit("('66','t1','t1p'),('70','t2','t2p')"));
// console.log(surveyResponse, surveyEncounterId);



// input: { question1: 3, question2b: [ 'itemA' ] } 86
// builds a query to insert appropriate number of rows into surveyResponse table
const surveyResponse_query_constructor = (surveyResponse, surveyEncounterId) => {
  const responseValue_surveySpecific = responseValue_constructor(surveyEncounterId);
  var responseValue = '';
  var question2 = '';
  const queryInit = (responseValues) => 
                      'INSERT INTO surveyResponse (surveyEncounter_surveyEncounterId, question, answer) VALUES ' + 
                      responseValues + ';';
  // responseValue += responseValue_surveySpecific('question1')(surveyResponse.question1);
  
  for (var question in surveyResponse) {
    console.log(question);
    console.log(surveyResponse[question]);
    if (!Array.isArray(surveyResponse[question])) {
      responseValue += responseValue_surveySpecific(question)(surveyResponse[question])
    }
  }
  console.log(responseValue, '!#42-309481-09841!!!');
  // const b = responseValue_constructor(surveyEncounterId)('bob1')('bob2');
  // console.log(queryInit(responseValue));
  return queryInit(responseValue) // 'SELECT * FROM surveyEncounter;' //
};
    // const q1 = request.payload.question1;
    // TODO: check if whether it is question2a or question2b
    // const q2 = request.payload.question2.toString();
    // const surveyResponse_entries = (surveyEncounter_surveyEncounterId) =>
    //                                `('${surveyEncounter_surveyEncounterId}','question1', 'answer1');`
    // const surveyResponse_query = (surveyEncounter_surveyEncounterId) => 
    //                              `INSERT INTO surveyResponse (surveyEncounter_surveyEncounterId, question, answer) VALUES` +
    //                              surveyResponse_entries(surveyEncounter_surveyEncounterId)




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
            
            // console.log(surveyResponse_query);
            
            connection.query(
              surveyResponse_query,
              (error, rows, _fields) => {
                if (error) {console.log(error); reject(error)}
                // console.log(rows); // TODO: get rid of
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

