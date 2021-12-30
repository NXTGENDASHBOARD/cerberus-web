import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};


@Component({
  selector: 'app-application-pipeline',
  templateUrl: './application-pipeline.component.html',
  styleUrls: ['./application-pipeline.component.scss']
})
export class ApplicationPipelineComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Total",
          data: [44, 10, 57, 20, 61, 70, 63]
        }
        // {
        //   name: "Revenue",
        //   data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        // },
        // {
        //   name: "Free Cash Flow",
        //   data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        // }
      ],
      
      
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false
        }
       
      },grid: {
        show: false,
        xaxis: {
            lines: {
                show: false
            }
        },   
        yaxis: {
            lines: {
                show: false
            }
        }  
    }
    ,
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "70%",
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: false,
        width: 0,
        colors: ["transparent"]
      },
      xaxis: {
        labels: {
          show: false
        },
        categories: ["", "", "", "", "", "", "", "", ""]
      },
      yaxis: {
        show: false,
        title: {
          text: ""
        }
      },
      fill: {
        opacity: 2,
        colors: "#FEC89A",
      },
      
      tooltip: {
        y: {
          formatter: function (val:any) {
            return val ;
          }
        }
      }
    };
  }
}
