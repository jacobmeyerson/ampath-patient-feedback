'use strict';

const Hapi = require('hapi');
const mysql = require('mysql');
const request = require('request');
const routes = require('./routes');

const connection = mysql.createConnection({
  user: 'root',
  password: 'root',
  host: 'db',
  port: '3306',
  database: 'patient_feedback2'
});

const server = Hapi.Server({
  port: 3000,
  host: 'localhost',
  routes: {
    cors: true
  }
});

/*To change to validate against OpenMRS:
 * Uncomment "authbuffer" and "headers" (Lines 29-30)
 * Comment out "if (username == 'jacob)... else resolve ..." (Lines 33-34)
 * Uncomment from "var callback" through the end of validate (Lines 35-47)
*/
const validate = async (_request, username, password) => {
  // var authBuffer = new Buffer(username + ":" + password).toString("base64");
  // var headers = {'Authorization': "Basic " + authBuffer};
  return new Promise(
    (resolve, reject) => {
      if (username === 'sam') resolve({isValid: true, credentials: {}})
      else resolve({isValid: false, credentials: {}})});
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

const init = async () => {
  connection.connect();
  
  await server.register([
    {plugin: require('hapi-auth-basic')},
    {plugin: require('inert')}
  ]);

  server.auth.strategy('simple', 'basic', { validate });

  for (var route of routes.routesFxn(connection,validate)) {
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