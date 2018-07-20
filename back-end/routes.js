'use strict';

module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/test',
            options: {
              auth: false
            },
          
            // options: {auth: 'false'},
            handler: function(request, h) { 
                return ('bob');
            //   const query1 = 'SELECT * FROM surveyResponse';
            //   return new Promise(
            //     (resolve, reject) => {
            //       connection.query(
            //         'SELECT * FROM surveyEncounter; SELECT * FROM surveyResponse',
            //         (error, rows, _fields) => {
            //           resolve(rows);
            //         });
            //     }
            //   );
            }
          }
          
    ]
}