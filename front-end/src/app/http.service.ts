import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {
    constructor(private http: Http) {}

    getSurveys() {
        return this.http.get('http://localhost:3000/getSurveys');
    }
    storeSurveys(response) {
        console.log('service');
        return this.http.post('http://localhost:3000/storeSurveys', response); // , response);
    }

}
