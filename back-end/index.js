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
    const payload = request.payload;

    const surveyId = payload.surveyId;
    const location = payload.location;
    const date = payload.date;
    const department = payload.department;
    const clinicalProgramId = payload.clinicalProgramId;
    const surveyEncounter_query = `INSERT INTO surveyEncounter
                                  (surveyId, location, date, department, clinicalProgramId) VALUES
                                  ('${surveyId}','${location}','${date}','${department}','${clinicalProgramId}');`;
    // const q1 = request.payload.question1;
    // TODO: check if whether it is question2a or question2b
    // const q2 = request.payload.question2.toString();
    const surveyResponse_query = (surveyEncounter_surveyEncounterId) =>
                                  `INSERT INTO surveyResponse 
                                  (surveyEncounter_surveyEncounterId, question, answer) VALUES 
                                  ('${surveyEncounter_surveyEncounterId}', 'TEST YAK', 'TEST BOB ANSWER');`;
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

            connection.query(
              surveyResponse_query(rows[0]["LAST_INSERT_ID()"]),
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

