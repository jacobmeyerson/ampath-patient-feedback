import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-clinic-type',
  templateUrl: './clinic-type.component.html',
  styleUrls: ['./clinic-type.component.css']
})
export class ClinicTypeComponent implements OnInit {
    model: any = {};
 
    onSubmit() {
      this.route.navigate(['welcome']);
    }

  constructor(private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => console.log(params.location));
  }

  onClick() {
    this.route.navigate(['welcome']);
  }

}

