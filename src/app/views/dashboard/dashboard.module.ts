import { NgModule } from '@angular/core';
import { NgxGaugeModule } from 'ngx-gauge';
import { DashboardRoutingModule, declarations } from './dashboard-routing.module';

import { IMPORT_MODULES } from './dashboard.imports';
import { ChartComponent } from './home/application-charts/chart/chart.component';
import { ApplicationPipelineComponent } from './home/application-pipeline/application-pipeline.component';
import { GaugeChartComponent } from './home/gauge-chart/gauge-chart.component';
import { FilterBtnComponent } from './home/filter-btn/filter-btn.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ApplicationLocationComponent } from './home/application-location/application-location.component';


   
@NgModule({
  declarations: [
    ...declarations,
    ApplicationPipelineComponent,
    GaugeChartComponent,
    FilterBtnComponent,
    ApplicationLocationComponent, 
   ],
  imports: [
    IMPORT_MODULES,
    DashboardRoutingModule,
    NgxGaugeModule,
    NgxChartsModule
  ]
})
export class DashboardModule { }
