import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShortListRoutingModule } from './short-list-routing.module';
import { ShortListComponent } from './short-list.component';


@NgModule({
  declarations: [
    ShortListComponent
  ],
  imports: [
    CommonModule,
    ShortListRoutingModule
  ]
})
export class ShortListModule { }
