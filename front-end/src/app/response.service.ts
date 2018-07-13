import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ResponseService {
    constructor(private http: Http) {}
}
