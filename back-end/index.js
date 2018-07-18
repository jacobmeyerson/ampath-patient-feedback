'use strict';

const SURVEYFILE = './surveys.json';

const Hapi = require('hapi');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'jacob922',
  database : 'patient_feedback'
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
  handler: function(request, _h) {  
    console.log(request.payload);
    const q1 = request.payload.question1;

    // TODO: check if whether it is question2a or question2b
    const q2 = request.payload.question2.toString();

    return new Promise(
      (resolve, reject) => {
        connection.query(
          `INSERT INTO responses (rating, reasons) VALUES (${q1},'${q2}');`,
          (error, _rows, _fields) => {
            if (error) {console.log('ERROR'); reject(error)}
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

