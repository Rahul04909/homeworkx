import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class StateService {
    // Derive states API URL from the login URL in environment, or fallback to expected default
    private apiUrl = environment.apiUrl.replace('/login', '/states');

    constructor(private http: HttpClient) { }

    getStates(): Observable<any> {
        return this.http.get<any>(this.apiUrl);
    }

    addState(stateData: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, stateData);
    }

    updateState(stateData: any): Observable<any> {
        const id = stateData.state_id || stateData.id;
        const url = `${this.apiUrl}/${id}`;
        const payload = {
            state_name: stateData.state_name || stateData.name,
            record_is_enable: stateData.record_is_enable
        };
        return this.http.put<any>(url, payload);
    }
}
