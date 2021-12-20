import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { AccountService } from '../_services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private accountService: AccountService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if ([401, 403].includes(err.status) && this.accountService.accountValue) {
                // Logout if 401 or 403 responses returned from an API.
                this.accountService.logout();
            }
            const error = (err && err.error && err.error.message) || err.statueText;
            console.error(err);
            return throwError(error);
        }));
    }

}