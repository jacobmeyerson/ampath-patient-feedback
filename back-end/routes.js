'use strict';

const SURVEYFILE = './surveys.json';

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

module.exports = { routesFxn: (connection, validate) => [
{
  method: 'GET',
  path: '/getSurveys',
  handler: function(request, h) { 
    return h.file(SURVEYFILE);
  }
},
{
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
},
{
  method: 'POST',
  path: '/validate',
  options: {
    auth: false
  },
  handler: function(request, h) {
    console.log(request.payload.username); 
    return validate({},request.payload.username, request.payload.password)
  }
}
]}