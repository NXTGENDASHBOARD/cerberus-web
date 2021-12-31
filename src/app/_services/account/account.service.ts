import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, finalize } from 'rxjs/operators';
import { Account } from 'src/app/_models';

const baseUrl = `${environment.apiUrl}/account`;

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private accountSubject: BehaviorSubject<Account>;
  public account: Observable<Account>;

  // The account Service exposes an RxJS observable so any component can subscribe to be notified when a user logs in, logs out, has their token refreshed

  constructor(private router: Router, private http: HttpClient) {
    this.accountSubject = new BehaviorSubject<Account>(new Account());
    this.account = this.accountSubject.asObservable();
  }

  // Return the current value to all the subscribers of our Account subject.
  public get accountValue(): Account {
    return this.accountSubject.value;
  }

  // Gives the user access to login to our application.
  login(staffNumber: string, pin: string) {
    return this.http
      .post<any>(
        `${baseUrl}/itslogin`,
        { staffNumber, pin },
        { withCredentials: true }
      );
   
  }

  // Logs the user out of our application stops the refresh timer and navigates to the account landing page(Login).
  logout() {
    // TODO: When we get to tokenization management with ITS 4.1 APi integration
    // this.http.post<any>(`${baseUrl}/revoke-token`, {}, { withCredentials: true }).subscribe();
    this.stopRefreshTokenTimer();
    this.accountSubject.next(new Account());
    this.router.navigate(['/']);
  }

  // Refreshes the token to ensure that a user in a session is logged in.
  refreshToken() {
    return this.http
      .post<Account>(`${baseUrl}/refresh-token`, {}, { withCredentials: true })
      .pipe(
        map((account) => {
          this.accountSubject.next(account);
          return account;
        })
      );
  }

  // Verify email.
  verifyEmail(token: string) {
    return this.http.post(`${baseUrl}/verify-email`, { token });
  }

  // Forgot password
  forgotPassword(email: string) {
    return this.http.post(`${baseUrl}/forgot-password`, { email });
  }

  // Validate reset token so that we don't give power to hackers.
  validateResetToken(token: string) {
    return this.http.post(`${baseUrl}/validate-reset-token`, { token });
  }

  // Reset password
  resetPassword(token: string, password: string, confirmPassword: string) {
    return this.http.post(`${baseUrl}/reset-password`, {
      token,
      password,
      confirmPassword,
    });
  }

  // Returns all the user accounts in the system : Admin should be able to call this.
  getAll() {
    return this.http.get<Account[]>(baseUrl);
  }

  // Returns a user account based on the account's id
  getById(id: string) {
    return this.http.get<Account>(`${baseUrl}/${id}`);
  }

  // Removes the record (best practise is to do a Soft-Delete)
  // delete(id: string) {
  //   return this.http.delete(`${baseUrl}/${id}`).pipe(
  //     finalize(() => {
  //       // auto logout if the logged in account was deleted
  //       if (id === this.accountValue.id) this.logout();
  //     })
  //   );
  // }

  // Private Helper methods (can only be used within this object)
  private refreshTokenTimeout: any;

  private startRefreshTokenTimer() {
    // parse json object from base64 encoded jwt token.
    let jwtToken;
    if (this.accountValue.token) {
      jwtToken = JSON.parse(atob(this.accountValue.token.split('.')[1]));
    }

    // set a timeout to refresh the token a minute before it expires
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - Date.now() - 60 * 1000;
    // TODO Implement Refresh token.
  }

  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }
}
