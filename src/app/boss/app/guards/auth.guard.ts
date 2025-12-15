import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(): boolean | UrlTree {
        const isLoggedIn = this.authService.isLoggedIn();
        console.log('AuthGuard Check: Is Logged In?', isLoggedIn);
        if (isLoggedIn) {
            return true;
        } else {
            console.warn('AuthGuard: Access denied, redirecting to login');
            return this.router.createUrlTree(['/admin/login']);
        }
    }
}
