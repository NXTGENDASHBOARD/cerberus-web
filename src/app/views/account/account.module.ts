import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AccountRoutingModule, declarations } from './account-routing.module'; 
import { IMPORT_MODULES } from './account.imports';
 
@NgModule({
  declarations: [
    ...declarations,
    
  ],
  imports: [
    IMPORT_MODULES,
    AccountRoutingModule,
    HttpClientModule
  ]
})
export class AccountModule { }
