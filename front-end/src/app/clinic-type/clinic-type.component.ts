import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-clinic-type',
  templateUrl: './clinic-type.component.html',
  styleUrls: ['./clinic-type.component.css']
})
export class ClinicTypeComponent implements OnInit {


  constructor(private route: Router) { }

  ngOnInit() {
  }

  onClick() {
    this.route.navigate(['welcome']);
  }

}

