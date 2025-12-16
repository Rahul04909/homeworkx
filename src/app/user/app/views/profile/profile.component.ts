import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserAuthService } from '../../services/user-auth.service';
import {
    ButtonDirective,
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    ColComponent,
    ContainerComponent,
    FormControlDirective,
    FormDirective,
    FormLabelDirective,
    FormSelectDirective,
    InputGroupComponent,
    InputGroupTextDirective,
    RowComponent,
    TabsComponent,
    TabsListComponent,
    TabsContentComponent,
    TabPanelComponent,
    TabDirective,
    TextColorDirective
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ContainerComponent,
        RowComponent,
        ColComponent,
        CardComponent,
        CardHeaderComponent,
        CardBodyComponent,
        FormDirective,
        FormLabelDirective,
        FormControlDirective,
        InputGroupComponent,
        InputGroupTextDirective,
        ButtonDirective,
        FormSelectDirective,
        IconDirective,
        TextColorDirective,
        TabsComponent,
        TabsListComponent,
        TabsContentComponent,
        TabPanelComponent,
        TabDirective,
        TextColorDirective
    ],
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    // Component logic for profile management
    profileForm!: FormGroup;
    passwordForm!: FormGroup;
    activeTab = 0;
    isLoading = false;
    message = '';
    messageType: 'success' | 'danger' = 'success';
    userRole: string = 'customer'; // Default

    // Reused generic lists
    nigeriaStates = [
        'Lagos', 'Abuja (FCT)', 'Kano', 'Rivers', 'Oyo', 'Kaduna', 'Enugu', 'Edo', 'Delta', 'Ogun', 'Anambra'
    ];

    // Mapping logic same as signup can be reused or simplified
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
    isdCodes = ['+234', '+233', '+44', '+1'];

    constructor(
        private fb: FormBuilder,
        private authService: UserAuthService
    ) { }

    ngOnInit(): void {
        this.initForms();
        this.fetchProfile();
    }

    initForms() {
        this.profileForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(2)]],
            email: [{ value: '', disabled: true }, [Validators.required, Validators.email]], // Email usually readonly
            mobile: ['', [Validators.required]],
            isd_code: ['+234', [Validators.required]],
            city: [''],
            state: [''], // Only for agents mostly

            // Agent specific fields
            business_name: [''],
            business_type: [''],
            address: [''],
            zipcode: [''],
            registration_details: [''],
            tax_details: ['']
        });

        this.passwordForm = this.fb.group({
            current_password: ['', [Validators.required]],
            new_password: ['', [Validators.required, Validators.minLength(6)]],
            new_password_confirmation: ['', [Validators.required]]
        }, { validators: this.passwordMatchValidator });
    }

    passwordMatchValidator(g: FormGroup) {
        const pass = g.get('new_password')?.value;
        const confirm = g.get('new_password_confirmation')?.value;
        return pass === confirm ? null : { mismatch: true };
    }

    fetchProfile() {
        this.isLoading = true;
        this.authService.getProfile().subscribe({
            next: (res) => {
                this.isLoading = false;
                if (res) {
                    // Assuming res contains user object directly or nested
                    const user = res; // API Example: {"id":1,"name":"Test",...}

                    this.userRole = user.usertype || 'customer';

                    this.profileForm.patchValue({
                        name: user.name,
                        email: user.email,
                        mobile: user.mobile,
                        isd_code: user.isd_code || '+234',
                        city: user.city,
                        state: user.state,
                        business_name: user.business_name,
                        business_type: user.business_type,
                        address: user.address,
                        zipcode: user.zipcode,
                        registration_details: user.registration_details,
                        tax_details: user.tax_details
                    });

                    if (user.state) {
                        this.onStateChange(user.state, false); // Populate cities without clearing city
                        this.profileForm.patchValue({ city: user.city }); // repatch city
                    }
                }
            },
            error: (err) => {
                this.isLoading = false;
                this.showMessage('Failed to load profile', 'danger');
                console.error(err);
            }
        });
    }

    onStateChange(state: string, resetCity = true) {
        this.availableCities = this.citiesByState[state] || [];
        if (resetCity) {
            this.profileForm.get('city')?.setValue('');
        }
    }

    updateProfile() {
        if (this.profileForm.invalid) {
            this.profileForm.markAllAsTouched();
            return;
        }

        this.isLoading = true;
        this.message = '';

        // Enable email temporarily if needed or just exclude it from value
        // Assuming backend might not want email updated here or it's allowed.
        // Usually email update requires verification. Let's send what we have.

        const payload = this.profileForm.getRawValue();

        this.authService.updateProfile(payload).subscribe({
            next: (res) => {
                this.isLoading = false;
                this.showMessage('Profile updated successfully!', 'success');
            },
            error: (err) => {
                this.isLoading = false;
                this.showMessage('Failed to update profile. ' + (err.error?.message || ''), 'danger');
            }
        });
    }

    changePassword() {
        if (this.passwordForm.invalid) {
            this.passwordForm.markAllAsTouched();
            return;
        }

        this.isLoading = true;
        this.message = '';
        const payload = this.passwordForm.value;

        this.authService.changePassword(payload).subscribe({
            next: (res) => {
                this.isLoading = false;
                this.showMessage('Password changed successfully!', 'success');
                this.passwordForm.reset();
            },
            error: (err) => {
                this.isLoading = false;
                const msg = err.error?.message || 'Failed to change password';
                this.showMessage(msg, 'danger');
            }
        });
    }

    showMessage(msg: string, type: 'success' | 'danger') {
        this.message = msg;
        this.messageType = type;
        setTimeout(() => this.message = '', 5000);
    }

    onTabChange(index: string | number | undefined) {
        this.activeTab = <number>index;
        this.message = '';
    }
}
