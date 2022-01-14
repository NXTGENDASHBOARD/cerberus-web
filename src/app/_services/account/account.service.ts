import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, finalize } from 'rxjs/operators';
import { Account, AccountVerificationOtp, AccountVerificationRequest, IdpLogin, Register } from 'src/app/_models';

const baseUrl = `${environment.apiUrl}/account`;

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private accountSubject: BehaviorSubject<Account>;
  public account: Observable<Account>;
  constructor(private router: Router, private http: HttpClient) {
    this.accountSubject = new BehaviorSubject<Account>(null);
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
        `${baseUrl}/login`,
        { staffNumber, pin },
        { withCredentials: true }
      );
   
  }

  itslogin(staffNumber: string, pin: string) {
    return this.http
      .post<any>(
        `${baseUrl}/itslogin`,
        { staffNumber, pin },
        { withCredentials: environment.withCredentials }
      );   
  }


  register(model: Register): Observable<number> {
    return this.http.post<number>(`${baseUrl}/register`, model);
  }

  // Google Signin
  idpLogin(model: IdpLogin): Observable<Account> {
    return this.http.post<Account>(`${baseUrl}/idp-login`, model)
    .pipe(map(account => {
      sessionStorage.setItem('account', JSON.stringify(account));
      this.accountSubject.next(account);
      return account;
    }));
  }
  
  verifyOtp(model: AccountVerificationOtp): Observable<Number> {
    return this.http.post<number>(`${baseUrl}/verify-otp`, model);
  }
  
  requestOtp(model: AccountVerificationRequest) {
    return this.http.post<number>(`${baseUrl}/request-otp`, model);
  }

  logout() {
    this.accountSubject.next(null);
    this.http.post(`${baseUrl}/logout`,{});
    this.router.navigate(['']);    
  }

}
