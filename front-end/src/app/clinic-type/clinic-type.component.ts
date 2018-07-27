import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-clinic-type',
  templateUrl: './clinic-type.component.html',
  styleUrls: ['./clinic-type.component.css']
})
export class ClinicTypeComponent {
  clinicArray = ['DM', 'HTN', 'HIV'];

  constructor(private router: Router,
              private route: ActivatedRoute) {}


  onNext(clinicType) {
    const surveyId = 1;
    this.router.navigate([clinicType + '/survey/' + surveyId + '/welcome'],
                         { relativeTo: this.route }
                        );
  }

}

