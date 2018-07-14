import { Component, OnInit } from '@angular/core';
import { ResponseService } from '../response.service';
import { Response } from '../../../node_modules/@angular/http';

@Component({
  selector: 'app-questionnare',
  templateUrl: './questionnare.component.html',
  styleUrls: ['./questionnare.component.css']
})
export class QuestionnareComponent implements OnInit {

  json = {
    "title": "Patient Feedback Questionaire",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "radiogroup",
        "name": "1",
        "title": "Do you love Ampath",
        "isRequired": true,
        "choices": [
         {
          "value": "1",
          "text": "Yes"
         },
         {
          "value": "2",
          "text": "No"
         }
        ]
       }
      ]
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "radiogroup",
        "name": "2",
        "visible": false,
        "visibleIf": "{1} = \"2\"",
        "title": "Why do you hate Ampath?",
        "isRequired": true,
        "choices": [
         {
          "value": "1",
          "text": "No idea"
         },
         {
          "value": "2",
          "text": "Thats is Nature"
         },
         {
          "value": "3",
          "text": "Just That way"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "2",
        "visible": false,
        "visibleIf": "{1} = \"1\"",
        "title": "Why do you love Ampath?",
        "isRequired": true,
        "choices": [
         "item1",
         "item2",
         "item3"
        ]
       }
      ]
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "datepicker",
        "name": "3",
        "title": "Select Date",
        "isRequired": true
       }
      ]
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "dropdown",
        "name": "4",
        "title": "Select Department",
        
        "choices": [
           "item1",
           "item2",
           "item3"
          ]
       }
      ]
     },
     {
      "name": "page5",
      "elements": [
       {
        "type": "checkbox",
        "name": "5",
        "title": "Choose your favorite staff",
        "choices": [
         {
          "value": "1",
          "text": "Day"
         },
         {
          "value": "2",
          "text": "Dei"
         },
         {
          "value": "3",
          "text": "Days"
         }
        ]
       }
      ]
     }
    ],
    "showProgressBar": "Bottom"
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
