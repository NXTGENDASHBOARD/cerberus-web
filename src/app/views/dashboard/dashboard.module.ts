import { NgModule } from '@angular/core';
import { NgxGaugeModule } from 'ngx-gauge';
import { DashboardRoutingModule, declarations } from './dashboard-routing.module';

import { IMPORT_MODULES } from './dashboard.imports';
import { ChartComponent } from './home/application-charts/chart/chart.component';
import { ApplicationPipelineComponent } from './home/application-pipeline/application-pipeline.component';
import { GaugeChartComponent } from './home/gauge-chart/gauge-chart.component';

   
@NgModule({
  declarations: [
    ...declarations,
    ApplicationPipelineComponent,
    GaugeChartComponent, 
   ],
  imports: [
    IMPORT_MODULES,
    DashboardRoutingModule,
    NgxGaugeModule
  ]
})
export class DashboardModule { }
