import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    private apiUrl = 'https://homeworx.signatureglobal.in.net/api/login';
    private tokenKey = 'admin_token';
    private userKey = 'admin_user';

    constructor(private http: HttpClient, private router: Router) { }

    login(credentials: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, credentials).pipe(
            tap(response => {
                if (response.status === 'success' && response.token) {
                    localStorage.setItem(this.tokenKey, response.token);
                    if (response.user) {
                        localStorage.setItem(this.userKey, JSON.stringify(response.user));
                    }
                }
            })
        );
    }

    logout() {
        localStorage.removeItem(this.tokenKey);
        localStorage.removeItem(this.userKey);
        this.router.navigate(['/login']);
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem(this.tokenKey);
    }

    getToken(): string | null {
        return localStorage.getItem(this.tokenKey);
    }

    getUser(): any {
        const userStr = localStorage.getItem(this.userKey);
        return userStr ? JSON.parse(userStr) : null;
    }
}
