import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locationArray: string[];

  constructor(private router: Router) { }

  onSave() {
    this.router.navigate(['../clinic']);
  }

  ngOnInit() {
    this.locationArray = ['testloc1', 'testloc2', 'testloc3'];
  }

}
