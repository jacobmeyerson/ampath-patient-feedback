import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {

  constructor(private router: Router,
              private route: ActivatedRoute) {}

  onRestart() {
    this.router.navigate(['../clinic'],
                         { relativeTo: this.route }
                        );
  }

}
