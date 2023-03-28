import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GmodstoreUser } from '../_models/GmodstoreUser';
import { GmodstoreUserAddon } from '../_models/GmodstoreUserAddon';

@Injectable({providedIn: 'root'})
export class ApiGmsConnectorService {
    
    baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getMe() {
        return this.http.get<GmodstoreUser>(this.baseUrl + "gmodstore/me");
    }

    getMyAddons() {
        return this.http.get<GmodstoreUserAddon[]>(this.baseUrl + "gmodstore/me");
    }

}
