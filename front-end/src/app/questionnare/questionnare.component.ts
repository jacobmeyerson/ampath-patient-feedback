import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-questionnare',
  templateUrl: './questionnare.component.html',
  styleUrls: ['./questionnare.component.css']
})
export class QuestionnareComponent implements OnInit {
  json: JSON;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getSurveys().subscribe(
      (response: Response) => {
        this.json = response.json();
    });
  }
  bob(input) {
    console.log('completed!');
  }
   // needed for survey editing function (JM thinks)
   onSurveySaved(survey) {
     console.log('onsurveysaved');
    // this.json = survey;
  }
}
