import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PropertyTypeService {
    // Derive property types API URL from the login URL in environment
    // User gave: api/admin/ppt-types
    private apiUrl = environment.apiUrl.replace('/login', '/ppt-types');

    constructor(private http: HttpClient) { }

    getPropertyTypes(): Observable<any> {
        return this.http.get<any>(this.apiUrl);
    }

    addPropertyType(data: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, data);
    }

    updatePropertyType(data: any): Observable<any> {
        // Use POST to /ppt-types (root) with 'id' (mapped from ppt_type_id) in body to trigger update
        const payload = {
            ...data
        };

        // Ensure 'id' is present by checking ppt_type_id OR id
        const id = data.ppt_type_id || data.id;

        if (id) {
            payload.id = id;
        }

        console.log('PropertyTypeService updatePropertyType payload:', payload);
        return this.http.post<any>(this.apiUrl, payload);
    }
}
