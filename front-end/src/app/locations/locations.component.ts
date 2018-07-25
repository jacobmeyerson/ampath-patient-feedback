import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { Response } from '@angular/http';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  constructor(private router: Router, private httpservice:HttpService) { }

  onSave() {
    this.router.navigate(['../clinic']);
  }

  ngOnInit() {
    this.httpservice.getSurveys().subscribe(
      (response: Response) => {
        response = response.json().survey;
      });
  }

}
