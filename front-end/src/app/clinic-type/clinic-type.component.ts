import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-clinic-type',
  templateUrl: './clinic-type.component.html',
  styleUrls: ['./clinic-type.component.css']
})
export class ClinicTypeComponent {
  clinicArray = ['bob', 'charlie', 'david'];

  constructor(private router: Router,
              private route: ActivatedRoute) {}


  onNext() {
    // console.log(input);
    // console.log(typeof(input));
    // for (let ob in input) {
    //   console.log(ob);
    //   console.log(input[ob]);
    // }
    const input = 'bob';
    const clinicType = input;
    const surveyId = 1;
    this.router.navigate([clinicType + '/survey/' + surveyId + '/welcome'],
                         { relativeTo: this.route }
                        );
  }

}

