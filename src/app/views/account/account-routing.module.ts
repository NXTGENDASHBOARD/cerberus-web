import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/_helpers';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login';
import { LoginSuccessComponent } from './login-success';

const routes: Routes = [{
  path: '', component: AccountComponent, children: [
    {
      path: '',
      component: LoginComponent
    },
    {
      path: 'success',
      component: LoginSuccessComponent,
      // canActivate: [AuthGuard],
    },
  ]
}];
export const declarations = [AccountComponent, LoginComponent, LoginSuccessComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
