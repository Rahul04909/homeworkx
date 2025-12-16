import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

@Injectable({
    providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
    constructor(private authService: UserAuthService, private router: Router) { }

    canActivate(): boolean | UrlTree {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        return this.router.createUrlTree(['/user/login']);
    }
}
