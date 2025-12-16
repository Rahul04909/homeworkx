import { Component, OnInit, Input } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../../user/app/services/user-auth.service';
import { IconDirective } from '@coreui/icons-angular';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import {
  ButtonDirective,
  ButtonGroupComponent,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  ContainerComponent,
  FormControlDirective,
  FormDirective,
  FormFeedbackComponent,
  FormLabelDirective,
  FormSelectDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  RowComponent
} from '@coreui/angular';

@Component({
  selector: 'app-signup',
  standalone: true,
  styles: [
    `
    .signup-wrapper { margin-top: 100px; margin-bottom: 40px; }
    .signup-card-header { background-color: #27364B; color: #fff; }
    .role-toggle { gap: 8px; }
    .role-toggle button { border-radius: 999px; padding: 6px 16px; border: 1px solid #d4dae3; background: #e9edf3; color: #27364B; }
    .role-toggle button.is-active { background: linear-gradient(180deg, #1E90FF, #0057D9); color: #fff; box-shadow: 0 4px 12px rgba(0,87,217,0.3); border-color: transparent; }
    .section-title { color: #27364B; }
    .agent-grid c-col, .agent-grid .col-md-6 { margin-bottom: 1rem; }
    .bg-page { background: #f8fafc; }
    `
  ],
  template: `
    <app-header></app-header>
    <section class="bg-page signup-wrapper">
      <c-container>
        <c-row class="justify-content-center">
          <c-col md="12" lg="11" xl="10">
            <c-card class="mx-4">
              <c-card-header class="signup-card-header">
                <div class="d-flex align-items-center justify-content-between">
                  <div>
                    <strong>Sign-up</strong>
                  </div>
                  <div *ngIf="!hideRoleToggle" class="btn-group role-toggle" role="group" aria-label="Role selection">
                    <button cButton [class.is-active]="role === 'owner'" [color]="role === 'owner' ? 'primary' : 'secondary'" (click)="setRole('owner')">
                      <svg cIcon name="cilUser" class="me-1"></svg>
                      Owner
                    </button>
                    <button cButton [class.is-active]="role === 'agent'" [color]="role === 'agent' ? 'primary' : 'secondary'" (click)="setRole('agent')">
                      <svg cIcon name="cilBriefcase" class="me-1"></svg>
                      Agent
                    </button>
                  </div>
                </div>
              </c-card-header>
              <c-card-body class="p-4">
                <form cForm [formGroup]="form" (ngSubmit)="submit()">

                  <div class="mb-4">
                    <h5 class="mb-3 section-title">{{ hideRoleToggle ? 'Sign-up' : (role === 'agent' ? 'Agent Sign-up' : 'Owner Sign-up') }}</h5>
                  </div>

                  <ng-container *ngIf="role === 'agent'">
                    <c-row class="agent-grid">
                      <c-col md="6">
                        <label class="form-label">Business Name</label>
                        <input cFormControl formControlName="businessName" placeholder="Business Name" />
                      </c-col>
                      <c-col md="6">
                        <label class="form-label">Business Type</label>
                        <select cSelect formControlName="businessType">
                          <option value="">Select Business Type</option>
                          <option *ngFor="let bt of businessTypes" [value]="bt">{{ bt }}</option>
                        </select>
                      </c-col>
                      <c-col md="12">
                        <label class="form-label">Address</label>
                        <input cFormControl formControlName="address" placeholder="Business Address" />
                      </c-col>
                      <c-col md="6">
                        <label class="form-label">State</label>
                        <select cSelect formControlName="state" (change)="onStateChange($any($event.target).value)">
                          <option value="">Select State</option>
                          <option *ngFor="let st of nigeriaStates" [value]="st">{{ st }}</option>
                        </select>
                      </c-col>
                      <c-col md="6">
                        <label class="form-label">City</label>
                        <select cSelect formControlName="cityAgent">
                          <option value="">Select City</option>
                          <option *ngFor="let ct of availableCities" [value]="ct">{{ ct }}</option>
                        </select>
                      </c-col>
                      <c-col md="6">
                        <label class="form-label">Zipcode</label>
                        <input cFormControl formControlName="zipcode" placeholder="Postal Code" />
                      </c-col>
                      <c-col md="6">
                        <label class="form-label">Registration Details</label>
                        <input cFormControl formControlName="registrationDetails" placeholder="CAC / Registration Info" />
                      </c-col>
                      <c-col md="12">
                        <label class="form-label">Tax Details</label>
                        <input cFormControl formControlName="taxDetails" placeholder="TIN / Tax Info" />
                      </c-col>
                    </c-row>
                  </ng-container>

                  <c-input-group class="mb-3">
                    <span cInputGroupText>
                      <svg cIcon name="cilUser"></svg>
                    </span>
                    <input cFormControl formControlName="name" placeholder="Name" />
                  </c-input-group>

                  <div class="mb-3">
                    <label class="form-label">Mobile No</label>
                    <div class="d-flex gap-2">
                      <select cSelect class="flex-shrink-0" style="max-width: 140px" formControlName="isd">
                        <option *ngFor="let code of isdCodes" [value]="code">{{ code }}</option>
                      </select>
                      <input cFormControl class="flex-grow-1" formControlName="mobile" placeholder="Mobile Number" />
                    </div>
                  </div>

                  <ng-container *ngIf="role === 'owner'">
                    <c-input-group class="mb-3">
                      <span cInputGroupText>City</span>
                      <input cFormControl formControlName="cityOwner" placeholder="City" />
                    </c-input-group>
                  </ng-container>

                  

                  <c-input-group class="mb-3">
                    <span cInputGroupText>@</span>
                    <input cFormControl formControlName="email" placeholder="Email" />
                  </c-input-group>

                  <c-input-group class="mb-3">
                    <span cInputGroupText>
                      <svg cIcon name="cilLockLocked"></svg>
                    </span>
                    <input cFormControl formControlName="password" placeholder="Password" type="password" />
                  </c-input-group>

                  <c-input-group class="mb-4">
                    <span cInputGroupText>
                      <svg cIcon name="cilLockLocked"></svg>
                    </span>
                    <input cFormControl formControlName="confirmPassword" placeholder="Re-enter Password" type="password" />
                  </c-input-group>

                  <div class="text-danger mb-3" *ngIf="passwordMismatch">
                    Passwords do not match
                  </div>

                  <div class="d-grid">
                    <button cButton color="success" type="submit" [disabled]="form.invalid || passwordMismatch">Complete Sign-up</button>
                  </div>
                </form>
              </c-card-body>
            </c-card>
          </c-col>
        </c-row>
      </c-container>
    </section>
    <app-footer></app-footer>
  `,
  imports: [
    Header,
    Footer,
    NgIf,
    NgFor,
    ContainerComponent,
    RowComponent,
    ColComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    FormDirective,
    InputGroupComponent,
    InputGroupTextDirective,
    IconDirective,
    FormControlDirective,
    ButtonDirective,
    FormSelectDirective,
    ReactiveFormsModule
  ]
})
export class SignupComponent implements OnInit {
  @Input() hideRoleToggle = false;
  @Input() initialRole: 'owner' | 'agent' = 'owner';
  role: 'owner' | 'agent' = 'owner';
  form!: FormGroup;

  businessTypes = [
    'Real Estate Agency',
    'Property Consultant',
    'Broker',
    'Developer',
    'Facility Manager'
  ];

  isdCodes = ['+234', '+233', '+44', '+1'];

  nigeriaStates = [
    'Lagos',
    'Abuja (FCT)',
    'Kano',
    'Rivers',
    'Oyo',
    'Kaduna',
    'Enugu',
    'Edo',
    'Delta',
    'Ogun',
    'Anambra'
  ];

  citiesByState: Record<string, string[]> = {
    'Lagos': ['Ikeja', 'Lekki', 'Surulere', 'Ikorodu', 'Yaba'],
    'Abuja (FCT)': ['Asokoro', 'Wuse', 'Maitama', 'Garki', 'Gwarinpa'],
    'Kano': ['Nassarawa', 'Fagge', 'Kumbotso', 'Tarauni'],
    'Rivers': ['Port Harcourt', 'Obio-Akpor', 'Bonny'],
    'Oyo': ['Ibadan', 'Ogbomosho', 'Oyo'],
    'Kaduna': ['Kaduna North', 'Kaduna South', 'Zaria'],
    'Enugu': ['Enugu', 'Nsukka', 'Abakpa'],
    'Edo': ['Benin City', 'Uselu', 'Egor'],
    'Delta': ['Warri', 'Asaba', 'Ughelli'],
    'Ogun': ['Abeokuta', 'Ijebu Ode', 'Sagamu'],
    'Anambra': ['Awka', 'Onitsha', 'Nnewi']
  };

  availableCities: string[] = [];

  constructor(private fb: FormBuilder, private authService: UserAuthService, private router: Router) { }

  ngOnInit(): void {
    this.role = this.initialRole;
    this.form = this.fb.group({
      businessName: [''],
      businessType: [''],
      address: [''],
      state: [''],
      cityAgent: [''],
      zipcode: [''],
      registrationDetails: [''],
      taxDetails: [''],
      name: ['', [Validators.required, Validators.minLength(2)]],
      isd: ['+234', [Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{7,15}$/)]],
      cityOwner: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    });

    this.applyRoleValidators();
  }

  setRole(role: 'owner' | 'agent') {
    this.role = role;
    this.applyRoleValidators();
  }

  onStateChange(state: string) {
    this.availableCities = this.citiesByState[state] || [];
    this.form.get('cityAgent')?.setValue('');
  }

  get passwordMismatch(): boolean {
    const p = this.form.get('password')?.value;
    const c = this.form.get('confirmPassword')?.value;
    return !!p && !!c && p !== c;
  }

  private applyRoleValidators() {
    const agentFields = ['businessName', 'businessType', 'address', 'state', 'cityAgent', 'zipcode', 'registrationDetails', 'taxDetails'];
    agentFields.forEach(key => {
      const ctrl = this.form.get(key);
      if (!ctrl) return;
      if (this.role === 'agent') {
        ctrl.setValidators([Validators.required]);
      } else {
        ctrl.clearValidators();
        ctrl.setValue('');
      }
      ctrl.updateValueAndValidity();
    });

    const cityOwnerCtrl = this.form.get('cityOwner');
    if (cityOwnerCtrl) {
      if (this.role === 'owner') {
        cityOwnerCtrl.setValidators([Validators.required]);
      } else {
        cityOwnerCtrl.clearValidators();
        cityOwnerCtrl.setValue('');
      }
      cityOwnerCtrl.updateValueAndValidity();
    }
  }

  submit() {
    if (this.form.invalid || this.passwordMismatch) {
      return;
    }

    const val = this.form.value;

    // Map usage role to API usertype
    // Owner -> customer (as per prompt example)
    // Agent -> agent? (Assuming 'agent' for now if supported, otherwise default to customer)
    const usertype = this.role === 'owner' ? 'customer' : 'agent';

    // Construct payload per API requirements
    // API: {"name": "Test", "email": "...", "password": "...", "mobile": "...", "isd_code": "+91", "city": "Delhi", "usertype": "customer"}

    // Determine city based on role
    const city = this.role === 'owner' ? val.cityOwner : val.cityAgent;

    const payload = {
      name: val.name,
      email: val.email,
      password: val.password,
      mobile: val.mobile,
      isd_code: val.isd,
      city: city,
      usertype: usertype,
      // Include extra agent fields if necessary, though API spec in prompt didn't list them. 
      // We will send them in case the backend supports them flexibly.
      ...(this.role === 'agent' ? {
        business_name: val.businessName,
        business_type: val.businessType,
        address: val.address,
        state: val.state,
        zipcode: val.zipcode,
        registration_details: val.registrationDetails,
        tax_details: val.taxDetails
      } : {})
    };

    console.log('Signup submit payload', payload);

    this.authService.signup(payload).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          console.log('Signup successful', response);
          // Redirect to dashboard or login
          this.router.navigate(['/user/dashboard']);
        } else {
          alert('Signup failed: ' + (response.message || 'Unknown error'));
        }
      },
      error: (err) => {
        // Deep logging as requested
        console.group('Signup API Error Details');
        console.error('Full Error Object:', err);
        console.error('Status:', err.status);
        console.error('Status Text:', err.statusText);
        console.error('Message:', err.message);
        console.error('Error Body (err.error):', err.error);
        if (err.error && err.error.errors) {
          console.error('Validation Errors (err.error.errors):', err.error.errors);
        }
        console.groupEnd();

        let msg = 'Signup error';
        if (err.error) {
          if (err.error.errors) {
            // Larvel validation errors usually come as { errors: { field: ['msg'] } }
            const errors = err.error.errors;
            const firstKey = Object.keys(errors)[0];
            msg = errors[firstKey][0];
          } else if (err.error.message) {
            msg = err.error.message;
          } else if (typeof err.error === 'string') {
            msg = err.error;
          }
        }
        alert(msg);
      }
    });
  }
}
