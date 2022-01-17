import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService, ThemeService } from 'src/app/_services';
import { map, shareReplay } from 'rxjs/operators';
import { Account } from 'src/app/_models';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
    account: Account;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private themeService: ThemeService,
    private accountService: AccountService
  ) {}
  ngOnInit(): void {
    this.account = this.accountService.accountValue;  
  }
  
  get dark() {
    return this.themeService.theme === 'dark';
  }

  set dark(enable: boolean) {
    this.themeService.theme = enable ? 'dark' : 'light';
  }

  logout(){
    this.accountService.logout();
  }
}
