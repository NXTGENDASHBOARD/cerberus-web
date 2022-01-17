import { Injectable } from '@angular/core';

import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../_services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private accountService: AccountService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const account = this.accountService.accountValue;

        if (account) {
            // Check if route is restrected by role.
            // if (route.data.roles && !route.data.roles.includes(account.role)) {
            //     // Role not authorize redirect to home. misc
            //     this.router.navigate(['/']);
            //     return false;
            // }
            // authorized to access route.
            return true;
        }
        
        // not logged in redirect to account login page with a return url.
        this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
