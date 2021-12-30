import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { AccountService } from '../_services';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private accountService: AccountService, private snackbar:MatSnackBar) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if ([401, 403].includes(err.status) && this.accountService.accountValue) {
                // Logout if 401 or 403 responses returned from an API.
                this.accountService.logout();
            }
            const error = (err && err.error && err.error.message) || err.statueText;
            console.error(err);
            this.snackbar.open('Error: Please contact the Adminstrator, should the problem persists.', 'Close', {
              duration: 50000
            });
            
            return throwError(error);
        }));
    }

}