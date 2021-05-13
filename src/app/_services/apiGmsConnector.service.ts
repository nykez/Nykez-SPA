import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ApiGmsConnectorService {
    
    baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getAddons() {
        return this.http.get(this.baseUrl + "@me");
    }

}
