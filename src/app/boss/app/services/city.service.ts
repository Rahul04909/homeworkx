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
        // Use PUT to /cities/{id} with 'name' in body
        // Extract the city ID
        const cityId = cityData.city_id || cityData.id;

        if (!cityId) {
            console.error('Cannot update city: Missing city ID', cityData);
            throw new Error('City ID is required for update');
        }

        // Build the payload with 'name' field as per API spec
        const payload = {
            city_name: cityData.city_name || cityData.name,
            state_id: cityData.state_id,
            record_is_enable: cityData.record_is_enable
        };

        // Construct the URL with city ID
        const updateUrl = `${this.apiUrl}/${cityId}`;

        console.log('CityService updateCity URL:', updateUrl);
        console.log('CityService updateCity payload:', payload);

        return this.http.put<any>(updateUrl, payload);
    }
}
