import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ButtonModule,
  CardModule,
  TableModule,
  ModalModule,
  FormModule,
  GridModule
} from '@coreui/angular';
import { CityService } from '../../app/services/city.service';
import { StateService } from '../../app/services/state.service';

interface NigerianCity {
  id?: number;
  city_id?: number;
  name?: string;
  city_name: string;
  state?: string;
  state_id: number;
  record_is_enable: number | boolean;
  enabled?: boolean;
}

@Component({
  selector: 'app-nigerian-cities',
  templateUrl: './nigerian-cities.component.html',
  styleUrls: ['./nigerian-cities.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ModalModule,
    ButtonModule,
    CardModule,
    TableModule,
    FormModule,
    GridModule
  ]
})
export class NigerianCitiesComponent implements OnInit {
  cities: NigerianCity[] = [];
  states: any[] = []; // To store list of states for dropdown
  visible = false;

  // Form Model
  newCity: any = {
    city_name: '',
    state_id: null,
    record_is_enable: '1'
  };

  constructor(
    private cityService: CityService,
    private stateService: StateService
  ) { }

  ngOnInit() {
    this.fetchCities();
    this.fetchStates();
  }

  fetchCities() {
    this.cityService.getCities().subscribe({
      next: (response: any) => {
        console.log('Cities fetched:', response);
        if (Array.isArray(response)) {
          this.cities = response;
        } else if (response.data && Array.isArray(response.data)) {
          this.cities = response.data;
        } else {
          this.cities = [];
        }
      },
      error: (error) => {
        console.error('Error fetching cities:', error);
      }
    });
  }

  fetchStates() {
    this.stateService.getStates().subscribe({
      next: (response: any) => {
        console.log('States fetched for dropdown:', response);
        if (Array.isArray(response)) {
          this.states = response;
        } else if (response.data && Array.isArray(response.data)) {
          this.states = response.data;
        } else {
          this.states = [];
        }
      },
      error: (error) => {
        console.error('Error fetching states:', error);
      }
    });
  }

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  addNewCity() {
    this.visible = true;
    this.newCity = { city_name: '', state_id: null, record_is_enable: '1' };
    delete this.newCity.city_id;
  }

  editCity(city: any) {
    console.log('Edit City clicked:', city);
    this.visible = true;
    this.newCity = {
      city_id: city.city_id || city.id,
      city_name: city.city_name || city.name,
      state_id: city.state_id,
      record_is_enable: this.isCityEnabled(city) ? '1' : '0'
    };
  }

  submitNewCity() {
    const payload: any = {
      city_name: this.newCity.city_name,
      state_id: parseInt(this.newCity.state_id, 10),
      record_is_enable: parseInt(this.newCity.record_is_enable, 10)
    };

    if (this.newCity.city_id) {
      payload.city_id = this.newCity.city_id;
    }

    console.log('Submitting city:', payload);

    let request$: any;
    if (payload.city_id) {
      request$ = this.cityService.updateCity(payload);
    } else {
      request$ = this.cityService.addCity(payload);
    }

    request$.subscribe({
      next: (response: any) => {
        console.log('City saved:', response);
        this.visible = false;
        this.fetchCities();
      },
      error: (error: any) => {
        console.error('Error saving city:', error);
      }
    });
  }

  toggleCityStatus(city: any): void {
    // Simple status toggle matching Property Actions and Property Types
    const currentStatus = this.isCityEnabled(city);
    city.record_is_enable = currentStatus ? 0 : 1;
    const newStatusText = city.record_is_enable == 1 ? 'Active' : 'Inactive';
    alert(`${city.city_name || city.name} status is now ${newStatusText}.`);
  }

  // Helpers
  getCityName(city: any): string {
    return city.city_name || city.name;
  }

  getStateName(stateId: number): string {
    const state = this.states.find(s => (s.state_id || s.id) == stateId);
    return state ? (state.state_name || state.name) : 'Unknown State';
  }

  isCityEnabled(city: any): boolean {
    if (typeof city.record_is_enable !== 'undefined') {
      return city.record_is_enable == 1;
    }
    return !!city.enabled;
  }
}
