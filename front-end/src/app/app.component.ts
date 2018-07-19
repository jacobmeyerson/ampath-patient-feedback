import { Component } from '@angular/core';
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}
  onLogout() {
    // TODO: call server to delete session (see ng2amrs sessionService.deleteSession)
    window.sessionStorage.removeItem('auth.credentials');
    this.router.navigate(['../login']);
  }
}
