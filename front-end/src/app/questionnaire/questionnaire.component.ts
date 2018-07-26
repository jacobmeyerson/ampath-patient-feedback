import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  json: JSON;

  constructor(private httpService: HttpService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.httpService.getSurveys().subscribe(
      (response: Response) => {
        this.json = response.json().survey;
      });
  }

  onSurveyDone(response) {


    this.route.params.subscribe((params) => {
      const encounterInfo = {
        'surveyId': params.surveyId,
        'location': params.location,
        'date': '2018-07-06',
        'department': params.clinicType,
        'clinicalProgramId': 1
      };
      const toServer = {
        'encounterInfo': encounterInfo,
        'responseInfo': response
      };
      this.httpService.storeSurveys(toServer).subscribe();

    });

    this.router.navigate(['../../../../../success'],
                         { relativeTo: this.route }
                        );
  }

}
