import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PropertyActionService {
    // Derive property action types API URL from the login URL in environment
    // API endpoint: api/admin/ppt-action-types
    private apiUrl = environment.apiUrl.replace('/login', '/ppt-action-types');

    constructor(private http: HttpClient) { }

    getPropertyActionTypes(): Observable<any> {
        return this.http.get<any>(this.apiUrl);
    }

    addPropertyActionType(data: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, data);
    }

    updatePropertyActionType(data: any): Observable<any> {
        // Use POST to /ppt-action-types with 'id' in body to trigger update
        const payload = {
            ...data
        };

        // Ensure 'id' is present by checking ppt_action_type_id OR id
        const id = data.ppt_action_type_id || data.id;

        if (id) {
            payload.id = id;
        }

        console.log('PropertyActionService updatePropertyActionType payload:', payload);
        return this.http.post<any>(this.apiUrl, payload);
    }
}
