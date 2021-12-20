import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShortListComponent } from './short-list.component';

const routes: Routes = [{ path: '', component: ShortListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShortListRoutingModule { }
