import { NgModule } from '@angular/core';
import { NgxGaugeModule } from 'ngx-gauge';
import { DashboardRoutingModule, declarations } from './dashboard-routing.module';

import { IMPORT_MODULES } from './dashboard.imports';
import { ChartComponent } from './home/application-charts/chart/chart.component';

   
@NgModule({
  declarations: [
    ...declarations, 
   ],
  imports: [
    IMPORT_MODULES,
    DashboardRoutingModule,
    NgxGaugeModule
  ]
})
export class DashboardModule { }
