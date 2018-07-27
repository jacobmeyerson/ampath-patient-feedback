import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Response } from '@angular/http';



@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locationArray: {'uuid': string, 'name': string}[];
  constructor(private router: Router,
              private httpService: HttpService,
              private route: ActivatedRoute) {}

  onSave(location) {
    // console.log(location);
    if (location !== 'Select Location') {
      let uuid;
      for (const loc of this.locationArray) {
        if (loc.name === location) {
          uuid = loc.uuid;
        }
      }
      this.router.navigate([uuid + '/clinic'], { relativeTo: this.route });
    }
  }
  ngOnInit() {
    this.httpService.getLocations().subscribe(
      (response: Response) => {
        this.locationArray = response.json();
      });
  }

  }

