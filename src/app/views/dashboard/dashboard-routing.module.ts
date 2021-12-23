import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '.';
import {
  ApplicationChartsComponent,
  ChartComponent,
  DemographicChartsComponent,
  HomeComponent,
  HomeNavigationComponent,
} from './home';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'applications',
        loadChildren: () =>
          import('../applications/applications.module').then(
            (m) => m.ApplicationsModule
          ),
      },
      {
        path: 'short-list',
        loadChildren: () =>
        import('../short-list/short-list.module').then(
          (m) => m.ShortListModule
        ),
      }
    ],
  },
];

export const declarations = [
  DashboardComponent,
  HomeComponent,
  ApplicationChartsComponent,
  DemographicChartsComponent,
  HomeNavigationComponent,
  ChartComponent,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
