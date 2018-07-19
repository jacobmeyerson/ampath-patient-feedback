import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showAlert = false;

  constructor(private router: Router, private httpService: HttpService) { }

  onLogin(username: string, password: string) {
    // TODO: replace with call to server
    let authenticated = false;
    if (username === 'bob') {
      authenticated = true;
    }

    if (authenticated) {
      const base64 = btoa(username + ':' + password);
      window.sessionStorage.setItem('auth.credentials', base64);
    } else {
      this.showAlert = true;
    }
    this.router.navigate(['../location']);
  }
}

// if authenticated: window.sessionStorage.setItem(keyName, value);
// keyName: CREDENTIALS_KEY (they use 'auth.credentials')
// value: base64, where let base64 = btoa(username + ':' + password);


    // const headers = new Headers();

    // const credentials = btoa(username.value + ':' + password.value);

    // headers.append('Authorization', 'Basic ' + credentials);

    // const url = 'https://ngx.ampath.or.ke/test-amrs/ws/rest/v1/session/';

    // const request = this.http.get(url, {
    //   headers: headers
    // });

    // request
    // .subscribe(
    //   (response: Response) => {
    //     this.loggedInComplete.emit(true);
      //   const data = response.json();
      //   if (data.authenticated) {
      //     this.loggedInComplete.emit(true);
      //     this.http.delete(url, {
      //       headers: headers}); // logs out - according to https://wiki.openmrs.org/display/docs/REST+Web+Services+API+For+Clients
      // }
    // });


  // ngOnInit () {
    // const headers = new Headers();

    // const credentials = btoa('john:studio');

    // headers.append('Authorization', 'Basic ' + credentials);

    // const request = this.http.get('http://localhost:8000/reset', {
    //   headers: headers
    // });
    // request.subscribe(
    //   (response: Response) => console.log('Aunthentication is successful')
    // );
  // }
