import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demographic-charts',
  templateUrl: './demographic-charts.component.html',
  styleUrls: ['./demographic-charts.component.scss'],
})
export class DemographicChartsComponent implements OnInit {
  // Pie graph
  public chartType: string = 'pie';
  public chartDatasets: Array<any> = [
    { data: [120, 300, 100, 60, 40], label: 'Applicant race' },
  ];

  public chartLabels: Array<any> = [
    'White',
    'Black',
    'Indian',
    'Colored',
    'Other',
  ];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#FFAF20', '#34495e', '#11455B', '#f1c40f', '#bdc3c7'],

      borderWidth: 2,
    },
  ];

  // Pie graph

  public gChartDatasets: Array<any> = [
    { data: [120, 300, 50], label: 'Applicant gender' },
  ];

  public gChartLabels: Array<any> = ['Male', 'Female', 'Other'];

  public gChartColors: Array<any> = [
    {
      backgroundColor: ['#FFAF20', '#bdc3c7', '#34495e'],
      borderWidth: 2,
    },
  ];

  public dChartType: string = 'doughnut';

  public dChartDatasets: Array<any> = [
    {
      data: [300, 50, 100, 140, 11, 40, 201, 111, 5],
      label: 'Application location',
    },
  ];
  public dChartLabels: Array<any> = [
    'Eastern Cape',
    'Free State',
    'Gauteng',
    'Kwa-Zulu Natal',
    'Limpopo',
    'Mpumalanga',
    'Northern Cape',
    'North West',
    'Western Cape',
  ];
  public dChartColors: Array<any> = [
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
  ];
  public chartOptions: any = {
    responsive: true,
    legend: {
      display: true,
      position: 'bottom',
    },
  };

  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}

  constructor() {}

  ngOnInit(): void {}
}
