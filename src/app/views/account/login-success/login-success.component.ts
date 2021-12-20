import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/_models';
import { AccountService } from 'src/app/_services';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.scss'],
})
export class LoginSuccessComponent implements OnInit {
  account: Account;
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.account = this.accountService.accountValue;
    console.log(JSON.stringify(this.account));
  }

  logout() {
    this.accountService.logout();
  }
}
