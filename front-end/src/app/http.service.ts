import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HttpService {
    constructor(private http: Http) {}

    getCredentials() {
        const headers = new Headers();
        const credentials = sessionStorage.getItem('auth.credentials');
        headers.append('Authorization', 'Basic ' + credentials);
        return headers;
    }

    getSurveys() {
        return this.http.get('http://localhost:3000/getSurveys', {
            headers: this.getCredentials()
          });
    }
    getLocations() {
        return this.http.get('http://localhost:3000/getLocations', {
            headers: this.getCredentials()
          });
    }
    storeSurveys(response) {
        return this.http.post('http://localhost:3000/storeSurveys', response, {
            headers: this.getCredentials()
          });
    }
    login(response) {
        return this.http.post('http://localhost:3000/login', response, {
            headers: this.getCredentials()
          });
    }
    logout() {
        return this.http.get('http://localhost:3000/logout', {
            headers: this.getCredentials()
          });
    }

}
