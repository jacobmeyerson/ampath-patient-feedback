import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-clinic-type',
  templateUrl: './clinic-type.component.html',
  styleUrls: ['./clinic-type.component.css']
})
export class ClinicTypeComponent implements OnInit {
    model: any = {};
 

  constructor(private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => console.log(params.location));
  }

  onClick() {
    const clinicType = 'charlie';
    const surveyId = 1;
    this.router.navigate([clinicType + '/survey/' + surveyId + '/welcome'],
                         { relativeTo: this.route }
                        );
  }

}

