

AMPATH Patient Feedback

Usage

- Clone from GIT

- Set up database:
    - Follow instructions in database/database-instructions.txt

- Set up back end:
    - Navigate to back-end
    - $ node index.js

- Set up front end:
    - Navigate to front-end
    - $ npm install
    - $ ng serve --open

Documentation

- The survey is split up into hard-coded questions, and a survey from the SurveyJS module
- SurveyJS module: 
    - [https://www.npmjs.com/package/survey-angular](https://www.npmjs.com/package/survey-angular), cloned from [https://github.com/surveyjs/surveyjs_angular_cli](https://github.com/surveyjs/surveyjs_angular_cli)
    - To edit the SurveyJS survey being used: edit back-end/surveys.json
    - The “survey” field contains the information about the survey that is used by SurveyJS.  The other fields (“surveyId”) are used to have identifying information about such survey.  Additional fields, such as “location” (to determine which locations such survey could be administered) could be added here as well.
    - To change the actual survey, build a new survey at: https://surveyjs.io/survey/Builder/
    - After building the survey, go to the JSON Editor tag.  
    - Copy the JSON, and in your own JavaScript console, store it as “const json_survey”.  
        - Run “JSON.stringify(json_survey, null, ‘\t’);”
        - Store the output in the “survey” field of surveys.json

- To change url of back-end: change BASEURL in front-end/http.service.ts

Problems to resolve:

- Location field in surveyEncounter table in the database is currently of type text
    - If continue to store location uuid rather than location name, change the type to be VARCHAR with length 36

- clinicalProgramId in surveyEncounter table not currently being used
    - This is because the survey is not currently collecting the program name

- surveyId in surveyEncounter table is not currently being dynamically updated.
    - This is because there is currently only one survey option.  The surveyId is stored in the “surveyId” field of the back-end/surveys.json file.  To set it dynamically and store it in the database, change the surveyId variable in front-end/src/app/clinic-type/clinic-type.component.ts

- License for the SurveyJS module
    - We are using the SurveyJS module:  https://surveyjs.io/Library
    - AMPATH may need a license to use it commercially:
    - https://surveyjs.io/Home/Licenses

- Improve database storage
    - Error management
    - Should only be able to store information about surveys that exist

- Authorization
    - To change to authorizing against OpenMRS: follow instructions in validate function in back-end/index.js

- Add 404 error page
- Sanitize mySQL inputs (if eventually do free text)
