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
        this.json = response.json();
    });
  }

  onSurveyDone(response) {
    this.httpService.storeSurveys(response).subscribe();
  }

  // needed for survey editing function (JM thinks)
  //  onSurveySaved(survey) {
  //    console.log('onsurveysaved');
  //   // this.json = survey;
  // }
}
