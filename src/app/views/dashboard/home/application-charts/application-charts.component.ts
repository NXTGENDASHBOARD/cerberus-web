import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { NgxGaugeType } from 'ngx-gauge/gauge/gauge';
import { ChartModel, DashboardDataModel } from 'src/app/_models';
import { ApplicationService } from 'src/app/_services/application/application.service';
import * as d3 from "d3";


@Component({
  selector: 'app-application-charts',
  templateUrl: './application-charts.component.html',
  styleUrls: ['./application-charts.component.scss'],
})
export class ApplicationChartsComponent implements OnInit, OnChanges {
  

  @Input() dataTitle: string;
  @Input() dashboardDataModel: DashboardDataModel | undefined;
  // Dynamic charts
  dashboardCharts: ChartModel[] = [];
  dashboardContainer2Charts: ChartModel[] = [];
  dashboardContainer3Charts: ChartModel[] = [];

  // Faculty dynamic charts
  facultyDashboardCharts: ChartModel[] = [];
  constructor(private applicationServive:ApplicationService) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.generateFacultyApplicationsChartData(this.dashboardDataModel);
  }

  ngOnInit(): void {
    this.generateApplicationsChartData();
    this.generateApplicationsContainer2ChartDate();
    this.generateApplicationsContainer3ChartDate();
   
  }

  public chartClicked(e: any): void {
    console.log('clicked from graph');
  }

  generateApplicationsChartData() {
    // Add bar graph
    let barGraph: ChartModel = {
      ChartType: 'bar',
      chartDatasets: [
        {
          data: [65, 30, 17, 25, 30, 35, 40],
          label: 'Documentation Missing',
        },
        {
          data: [10, 58, 50, 60, 40, 15, 30],
          label: 'Applications Process Incomplete',
        },
        { data: [15, 2, 23, 5, 10, 5, 10], label: 'Valid Complete Applications' },
      ],
      chartLabels: [
        'Sciences',
        'Commerce',
        'Law',
        'Management',
        'Engineering',
        'Health Sciences',
        'Humanities',
      ],
      chartColors: [
        {
          backgroundColor: [
            '#F6BD60',
            '#F6BD60',
            '#F6BD60',
            '#F6BD60',
            '#F6BD60',
            '#F6BD60',
            '#F6BD60',
          ],
          borderColor: [
            '#F6BD60',
            '#F6BD60',
            '#F6BD60',
            '#F6BD60',
            '#F6BD60',
            '#F6BD60',
            '#F6BD60',
          ],
          borderWidth: 2,
        },
        {
          backgroundColor: [
            '#F7EDE2',
            '#F7EDE2',
            '#F7EDE2',
            '#F7EDE2',
            '#F7EDE2',
            '#F7EDE2',
            '#F7EDE2',
          ],
          borderColor: [
            '#F7EDE2',
            '#F7EDE2',
            '#F7EDE2',
            '#F7EDE2',
            '#F7EDE2',
            '#F7EDE2',
            '#F7EDE2',
          ],
          borderWidth: 2,
        },
        {
          backgroundColor: [
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
          ],
          borderColor: [
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
          ],
          borderWidth: 2,
        },
      ],
      isLegend: true,
      chartOptions: {
        responsive: true,
        legend: {
          display: true,
          position: 'bottom',
        },
        scales: {
          xAxes: [
            {
              stacked: true,
            },
          ],
          yAxes: [
            {
              stacked: true,
            },
          ],
        },
      },
    };

    // Doughnut
    let doughnutGraph: ChartModel = {
      ChartType: 'doughnut',
      chartDatasets: [
        {
          data: [300, 50, 100, 140, 300],
          label: 'Number of applicants',
        },
      ],
      chartLabels: ['Sciences', 'Commerce', 'Law', 'Management', 'Engineering'],
      chartColors: [
        {
          backgroundColor: [
            '#F7464A',
            '#46BFBD',
            '#FDB45C',
            '#949FB1',
            '#4D5360',
          ],
          borderWidth: 2,
        },
      ],
      isLegend: true,
      chartOptions: {
        responsive: true,
        legend: {
          display: true,
          position: 'bottom',
        },
      },
    };

    this.dashboardCharts.push(barGraph);
   // this.dashboardCharts.push(doughnutGraph);
  }

  generateApplicationsContainer2ChartDate() {
    // Bar graph
    let barGraph: ChartModel = {
      ChartType: 'bar',
      chartDatasets: [
        {
          data: [15, 20, 30, 70, 15, 30],
          label: 'Applicant by course type',
        },
      ],
      chartLabels: [
        'Doctorate',
        'Masters',
        'Honours',
        'Bachelor',
        'Higher Certificate',
        'National Certificate',
      ],
      chartColors: [
        {
          backgroundColor: [
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
          ],
          borderColor: [
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
          ],
        },
      ],
      isLegend: true,
      chartOptions: {
        responsive: true,
        legend: {
          display: false,
          position: 'bottom',
        },
      },
    };

    // Bar line graph
    let barLineGraph: ChartModel = {
      ChartType: 'bar',
      chartDatasets: [
        {
          data: [0, 20, 60, 71, 120, 160, 100, 60, 30, 40, 30, 10],
          label: 'Applicant Distribution',
          order: 2,
        },
        {
          data: [20, 40, 60, 80, 100, 90, 80, 60, 40, 20, 10, 0],
          label: 'Normal Distribution',
          type: 'line',
          order: 1,
          backgroundColor: 'transparent',
          borderColor: '#F6BD60',
          borderWidth: 2,
          pointBorderColor: '#F6BD60',
          pointBackgroundColor: '#F6BD60',
          // lineTension: 0.0,
        },
      ],
      chartLabels: ['', '', '', '', '', '', '', '', '', '', '', ''],
      chartColors: [
        {
          backgroundColor: [
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
          ],
          borderColor: [
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
            '#84A59D',
          ],
        },
        {
          // backgroundColor: 'rgba(0, 137, 132, .2)',
          borderColor: '#F6BD60',
          borderWidth: 2,
        },
      ],
      isLegend: true,
      chartOptions: {
        responsive: true,
        legend: {
          display: true,
          position: 'bottom',
        },
      },
    };

    this.dashboardContainer2Charts.push(barGraph);
    this.dashboardContainer2Charts.push(barLineGraph);
  }
  generateApplicationsContainer3ChartDate() {
    // Pie graph
    let pieGraph: ChartModel = {
      ChartType: 'pie',
      chartDatasets: [
        {
          data: [120, 300, 100, 60, 40],
          label: 'Applicant race',
        },
      ],
      chartLabels: ['White', 'Indian', 'Colored', 'Black', 'Other'],
      chartColors: [
        {
          backgroundColor: [
            '#F6BD60',
            '#84A59D',
            '#FFFFFF',
            '#CBCBCB',
            '#000000',
          ],
          borderColor: ['', '', '#F6BD60', '', '#84A59D'],
          borderWidth: 2,
        },
      ],
      isLegend: true,
      chartOptions: {
        responsive: true,
        legend: {
          display: true,
          position: 'bottom',
        },
      },
    };
    let genderPieGraph: ChartModel = {
      ChartType: 'pie',
      chartDatasets: [{ data: [120, 300, 50], label: 'Applicant gender' }],
      chartLabels: ['Male', 'Female', 'Other'],
      chartColors: [
        {
          backgroundColor: ['#F6BD60', '#CBCBCB', '#84A59D'],
          borderWidth: 2,
        },
      ],
      isLegend: true,
      chartOptions: {
        responsive: true,
        legend: {
          display: true,
          position: 'bottom',
        },
      },
    };
    let doughnutGraph: ChartModel = {
      ChartType: 'doughnut',
      chartDatasets: [
        {
          data: [300, 50, 100, 140, 11, 40, 201, 111, 5],
          label: 'Application location',
        },
      ],
      chartLabels: [
        'Eastern Cape',
        'Free State',
        'Gauteng',
        'Kwa-Zulu Natal',
        'Limpopo',
        'Mpumalanga',
        'Northern Cape',
        'North West',
        'Western Cape',
      ],
      chartColors: [
        {
          backgroundColor: [
            '#F7464A',
            '#46BFBD',
            '#FDB45C',
            '#949FB1',
            '#4D5360',
            '#11455B',
            '#FFAF20',
            '#f1c40f',
            '#C79712',
          ],
          borderWidth: 2,
        },
      ],
      isLegend: true,
      chartOptions: {
        responsive: true,
        legend: {
          display: true,
          position: 'bottom',
        },
      },
    };

    this.dashboardContainer3Charts.push(pieGraph);
    this.dashboardContainer3Charts.push(genderPieGraph);
    this.dashboardContainer3Charts.push(doughnutGraph);
  }

  generateFacultyApplicationsChartData(data: DashboardDataModel | undefined) {
    if (data) {
      this.facultyDashboardCharts = [];
      var invalidApplicationsPerCourseCount: any[] = [];
      var partialApplicationsPerCourseCount: any[] = [];
      var validApplicationsPerCourseCount: any[] = [];
      var chartLabels: any[] = [];

      var facultyApplicationCount = data.dataTypes.find(
        (x) => x.dataTypeName == 'ApplicationsByCourse'
      );

      // Process invalid Counts
      facultyApplicationCount?.dataSet?.forEach((element) => {
        invalidApplicationsPerCourseCount?.push(element.InvalidApplications);
        partialApplicationsPerCourseCount?.push(
          element.PartialyValidApplications
        );
        validApplicationsPerCourseCount?.push(element.ValidApplications);

        chartLabels?.push(element.CourseName);
      });
      let barGraph: ChartModel = {
        ChartType: 'bar',
        chartDatasets: [
          {
            data: invalidApplicationsPerCourseCount,
            label: 'Nr of invalid applications',
          },
          {
            data: partialApplicationsPerCourseCount,
            label: 'Nr of partially valid applications',
          },
          {
            data: validApplicationsPerCourseCount,
            label: 'Nr of valid applications',
          },
        ],
        chartLabels: chartLabels,
        chartColors: [
          {
            backgroundColor: [
              '#F6BD60',
              '#F6BD60',
              '#F6BD60',
              '#F6BD60',
              '#F6BD60',
              '#F6BD60',
              '#F6BD60',
            ],
            borderColor: [
              '#F6BD60',
              '#F6BD60',
              '#F6BD60',
              '#F6BD60',
              '#F6BD60',
              '#F6BD60',
              '#F6BD60',
            ],
            borderWidth: 2,
          },
          {
            backgroundColor: [
              '#F7EDE2',
              '#F7EDE2',
              '#F7EDE2',
              '#F7EDE2',
              '#F7EDE2',
              '#F7EDE2',
              '#F7EDE2',
            ],
            borderColor: [
              '#F7EDE2',
              '#F7EDE2',
              '#F7EDE2',
              '#F7EDE2',
              '#F7EDE2',
              '#F7EDE2',
              '#F7EDE2',
            ],
            borderWidth: 2,
          },
          {
            backgroundColor: [
              '#84A59D',
              '#84A59D',
              '#84A59D',
              '#84A59D',
              '#84A59D',
              '#84A59D',
              '#84A59D',
            ],
            borderColor: [
              '#84A59D',
              '#84A59D',
              '#84A59D',
              '#84A59D',
              '#84A59D',
              '#84A59D',
              '#84A59D',
            ],
            borderWidth: 2,
          },
        ],
        isLegend: true,
        chartOptions: {
          responsive: true,
          legend: {
            display: true,
            position: 'bottom',
          },
          scales: {
            xAxes: [
              {
                stacked: true,
              },
            ],
            yAxes: [
              {
                stacked: true,
              },
            ],
          },
        },
      };
      this.facultyDashboardCharts.push(barGraph);
    }
  }
  
}
