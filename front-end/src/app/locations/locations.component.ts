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
  locationArray;//: string[];

  constructor(private router: Router, private httpService: HttpService) { }

  onSave() {
    this.router.navigate(['../clinic']);
  }

  ngOnInit() {
    this.httpService.getLocations().subscribe(
      (response: Response) => {
        console.log(response.json());
        // this.locationArray = [{name: 'bob'}, {name: 'charlie'}];
        this.locationArray = response.json();
      });
    // this.locationArray = [{name: 'bob'}, {name: 'charlie'}];

    // this.locationArray = ['testloc1', 'testloc2', 'testloc3'];
  }

}
