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
        // Use POST to /states (root) with 'id' in body to trigger update
        const payload = {
            ...stateData,
            id: stateData.state_id // Map state_id to id for backend
        };
        return this.http.post<any>(this.apiUrl, payload);
    }
}
