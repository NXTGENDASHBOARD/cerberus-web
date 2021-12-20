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
