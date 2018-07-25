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
  locationArray;
  constructor(private router: Router, private httpService: HttpService) {}

  onSave(location) {
    console.log(location);
    // get uuid based on location
    const uuid = location;
    // route to appropriate url
    this.router.navigate(['../clinic/' + uuid]);
  }

  ngOnInit() {
    this.httpService.getLocations().subscribe(
      (response: Response) => {
        this.locationArray = response.json();
      });
  }

}
