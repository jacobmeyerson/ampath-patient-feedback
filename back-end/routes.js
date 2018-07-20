'use strict';

module.exports = {
  routesFxn: (connection) => [
{
  method: 'GET',
  path: '/test',
  options: {
    auth: false
  },
  handler: function(request, h) { 
    return new Promise(
      (resolve, reject) => {
        connection.query(
          'SELECT * FROM surveyEncounter',
          (error, rows, _fields) => {
            resolve(rows);
          });
      }
    );
  }
}   
]}