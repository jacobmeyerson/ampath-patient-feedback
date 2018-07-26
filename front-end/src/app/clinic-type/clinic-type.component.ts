import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-clinic-type',
  templateUrl: './clinic-type.component.html',
  styleUrls: ['./clinic-type.component.css']
})
export class ClinicTypeComponent implements OnInit {


  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => console.log(params.location));
  }

  onClick() {
    const clinic = 'bob';
    const surveyId = 1;
    this.router.navigate([clinic + '/survey/' + surveyId + '/welcome'],
                         { relativeTo: this.route }
                        );
  }

}

