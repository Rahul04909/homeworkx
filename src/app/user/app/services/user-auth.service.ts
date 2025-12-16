import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserAuthService {
    private apiUrl = 'https://homeworx.signatureglobal.in.net/api/user';
    private tokenKey = 'user_token';
    private userKey = 'user_details';

    constructor(private http: HttpClient, private router: Router) { }

    signup(data: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/signup`, data).pipe(
            tap(response => {
                if (response.status === 'success' && response.token) {
                    this.setSession(response);
                }
            })
        );
    }

    login(credentials: { email: string, password: string }): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
            tap(response => {
                if (response.status === 'success' && response.token) {
                    this.setSession(response);
                }
            })
        );
    }

    private setSession(authResult: any) {
        localStorage.setItem(this.tokenKey, authResult.token);
        if (authResult.user) {
            localStorage.setItem(this.userKey, JSON.stringify(authResult.user));
        }
    }

    logout() {
        localStorage.removeItem(this.tokenKey);
        localStorage.removeItem(this.userKey);
        this.router.navigate(['/user/login']);
    }

    public isLoggedIn(): boolean {
        return !!localStorage.getItem(this.tokenKey);
    }

    getToken(): string | null {
        return localStorage.getItem(this.tokenKey);
    }

    getUser(): any {
        const userStr = localStorage.getItem(this.userKey);
        return userStr ? JSON.parse(userStr) : null;
    }
    // State for password reset flow
    private resetState: { email?: string, otp?: string } = {};

    setResetState(email: string, otp: string) {
        this.resetState = { email, otp };
    }

    getResetState() {
        return this.resetState;
    }

    clearResetState() {
        this.resetState = {};
    }

    forgotPassword(email: string): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/forgot-password`, { email });
    }

    resetPassword(data: { email: string, otp: string, new_password: string, new_password_confirmation: string }): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/reset-password`, data);
    }
}
