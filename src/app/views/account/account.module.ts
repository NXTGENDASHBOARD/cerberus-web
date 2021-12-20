import { NgModule } from '@angular/core';
import { AccountRoutingModule, declarations } from './account-routing.module'; 
import { IMPORT_MODULES } from './account.imports';
import { LoginSuccessComponent } from './login-success/login-success.component';

@NgModule({
  declarations: [
    ...declarations,
    
  ],
  imports: [
    IMPORT_MODULES,
    AccountRoutingModule
  ]
})
export class AccountModule { }
