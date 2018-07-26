import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-cancel-page',
  templateUrl: './cancel-page.component.html',
  styleUrls: ['./cancel-page.component.css']
})
export class CancelPageComponent {

  constructor(private router:Router, private route:ActivatedRoute) { }

  onRestart() {
    this.router.navigate(['/clinic'],
                         { relativeTo: this.route }
                        );
  }

}
