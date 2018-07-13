import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() loggedInComplete = new EventEmitter<boolean>();

  onLogin(username, password) {
    this.loggedInComplete.emit(true);
  }
}
