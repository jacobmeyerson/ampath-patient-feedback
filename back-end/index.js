// TODO: sanitize inputs

'use strict';

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
  port: 4000,
  host: 'localhost',
  routes: {
    cors: true
  }
});

const validate = async (_request, username, password) => {
  // var authBuffer = new Buffer(username + ":" + password).toString("base64");
  // var headers = {'Authorization': "Basic " + authBuffer};
  return new Promise(
    (resolve, reject) => {
      if (username === 'jacob') resolve({isValid: true, credentials: {}})
      else resolve({isValid: false, credentials: {}})});
    // when test-amrs is working, comment out above 2 lines, uncomment below lines and authbuffer/header lines
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