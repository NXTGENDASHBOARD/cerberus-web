import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { declarations, ShortListRoutingModule } from './short-list-routing.module';

 

@NgModule({
  declarations: [
   ...declarations
  ],
  imports: [
    CommonModule,
    ShortListRoutingModule
  ]
})
export class ShortListModule { }
