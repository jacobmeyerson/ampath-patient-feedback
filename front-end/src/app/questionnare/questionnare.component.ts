import { Component, OnInit } from '@angular/core';
import { ResponseService } from '../response.service';
import { Response } from '../../../node_modules/@angular/http';

@Component({
  selector: 'app-questionnare',
  templateUrl: './questionnare.component.html',
  styleUrls: ['./questionnare.component.css']
})
export class QuestionnareComponent implements OnInit {

  json ={
    "title":"POC Patient Feedback",
    pages: [
     {
      name: "page1",
      elements: [
       {
        type: "rating",
        name: "1",
        title: "How likely is it that you would recommend\nthis clinic to a family member or friend?",
        isRequired: true,
        rateValues: [
         {
          value: 1,
          text: "1(Not likely)"
         },
         2,
         3,
         4,
         5,
         "6",
         "7",
         "8",
         "9",
         {
          value: "10",
          text: "10(Very Likely)"
         }
        ]
       }
      ]
     },
     {
      name: "page2",
      elements: [
       {
        type: "checkbox",
        name: "2",
        visible: false,
        visibleIf: "{1} = \"9\" or {1} = \"10\"",        
        title: "What was the best part of today’s clinic?",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Item"
         },
         {
          value: "2",
          text: "Item"
         },
         {
          value: "3",
          text: "Item"
         },
         {
          value: "4",
          text: "Item"
         },
         {
          value: "5",
          text: "Item"
         }
        ]
       },
       {
        type: "checkbox",
        name: "2",
        visible: false,
        visibleIf: "{1} = \"1\" or {1} = \"2\" or {1} = \"3\" or {1} = \"4\" or {1} = \"5\" or {1} = \"6\" or {1} = \"7\" or {1} = \"8\"",
        title: "What would you change for next time?",
        isRequired: true,
        choices: [
         {
          value: "1",
          text: "Item "
         },
         {
          value: "2",
          text: "Item"
         },
         {
          value: "3",
          text: "Item"
         },
         {
          value: "4",
          text: "Item"
         },
         {
          value: "5",
          text: "Item"
         }
        ]
       }
      ]
     }
    ],
    "showProgressBar": "bottom"
   }

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
