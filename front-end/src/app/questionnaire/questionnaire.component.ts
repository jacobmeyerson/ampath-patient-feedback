import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  json: JSON;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getSurveys().subscribe(
      (response: Response) => {
        this.json = response.json().survey;
    });
  }

  onSurveyDone(response) {
    console.log(response);
    response.location = 'test location';
    response.date = '2018-07-06';
    response.department = 'test department';
    response.clinicalProgramId = 1;
    this.httpService.storeSurveys(response).subscribe();
  }

  // needed for survey editing function (JM thinks)
  //  onSurveySaved(survey) {
  //    console.log('onsurveysaved');
  //   // this.json = survey;
  // }
}
