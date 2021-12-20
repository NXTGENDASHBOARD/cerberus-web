import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule) },
{ path: 'applications', loadChildren: () => import('./views/applications/applications.module').then(m => m.ApplicationsModule) },
{ path: 'short-list', loadChildren: () => import('./views/short-list/short-list.module').then(m => m.ShortListModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
