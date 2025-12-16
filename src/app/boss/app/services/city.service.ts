import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CityService {
    // Derive cities API URL from the login URL in environment
    private apiUrl = environment.apiUrl.replace('/login', '/cities');

    constructor(private http: HttpClient) { }

    getCities(): Observable<any> {
        return this.http.get<any>(this.apiUrl);
    }

    addCity(cityData: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, cityData);
    }

    updateCity(cityData: any): Observable<any> {
        // Use POST to /cities (root) with 'id' in body to trigger update
        // We must ensure 'id' is present in the payload
        const payload = {
            ...cityData
        };

        // If we have city_id, use it as 'id'
        if (cityData.city_id) {
            payload.id = cityData.city_id;
        }
        // If we don't have city_id but have id, ensure it persists (already in spread)
        // If we have neither, this might fail to update and cause a create on some backends

        console.log('CityService updateCity payload:', payload);
        return this.http.post<any>(this.apiUrl, payload);
    }
}
