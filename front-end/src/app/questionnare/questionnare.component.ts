import { Component, OnInit } from '@angular/core';
import { ResponseService } from '../response.service';
import { Response } from '../../../node_modules/@angular/http';

@Component({
  selector: 'app-questionnare',
  templateUrl: './questionnare.component.html',
  styleUrls: ['./questionnare.component.css']
})
export class QuestionnareComponent implements OnInit {
  json: JSON;

  constructor(private responseService: ResponseService) {}

  ngOnInit() {
    this.responseService.getSurveys().subscribe(
      (response: Response) => {
        this.json = response.json();
    });
  }

   // needed for survey editing function (JM thinks)
   onSurveySaved(survey) {
    this.json = survey;
  }
}
