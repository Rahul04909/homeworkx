import { Component, inject } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CardComponent, CardHeaderComponent, CardBodyComponent, RowComponent, ColComponent, FormDirective, FormControlDirective, FormSelectDirective, InputGroupComponent, InputGroupTextDirective, ButtonDirective } from '@coreui/angular';

@Component({
  selector: 'app-new-property',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
  imports: [NgIf, NgFor, ReactiveFormsModule, CardComponent, CardHeaderComponent, CardBodyComponent, RowComponent, ColComponent, FormDirective, FormControlDirective, FormSelectDirective, InputGroupComponent, InputGroupTextDirective, ButtonDirective]
})
export class NewPropertyComponent {
  private fb = inject(FormBuilder);
  form: FormGroup = this.fb.group({
    intent: ['', Validators.required],
    propertyType: ['', Validators.required],
    title: ['', Validators.required],
    description: ['', [Validators.required, Validators.minLength(20)]],
    address: ['', Validators.required],
    state: ['', Validators.required],
    city: ['', Validators.required],
    zip: ['', Validators.required],
    bedrooms: [null],
    bathrooms: [null],
    area: [null],
    yearBuilt: [null],
    price: [null],
    negotiable: [false],
    deposit: [null],
    leaseTerm: [null],
    value: [null],
    downPayment: [null],
    interestRate: [null],
    tenureYears: [null],
    recipient: [''],
    conditions: [''],
    availabilityDate: [''],
    sharePercent: [null],
    minInvestment: [null],
    terms: ['']
  });

  intents = ['Sell', 'Rent out', 'Lease', 'Mortgage', 'Donate', 'Profit Sharing Venture'];
  propertyTypes = ['Apartment', 'House', 'Land', 'Commercial', 'Office', 'Warehouse', 'Shop'];
  states = ['Lagos', 'Abuja (FCT)', 'Kano', 'Rivers'];
  cities = ['Ikeja', 'Lekki', 'VI', 'Ajah', 'Garki', 'Wuse'];

  onIntentChange(value: string) {
    this.form.patchValue({ price: null, deposit: null, leaseTerm: null, value: null, downPayment: null, interestRate: null, tenureYears: null, recipient: '', conditions: '', availabilityDate: '', sharePercent: null, minInvestment: null, terms: '' });
  }

  submit() {}
}

