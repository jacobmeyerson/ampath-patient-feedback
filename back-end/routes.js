'use strict';

module.exports = {
    r: (connection) => [
        {
            method: 'GET',
            path: '/test',
            options: {
              auth: false
            },
          
            // options: {auth: 'false'},
            handler: function(request, h) { 
                // return ('bob');
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
          
    ]
}