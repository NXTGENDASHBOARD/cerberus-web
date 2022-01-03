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
  gaugemap = {};
  public applications:any = [];

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
    this.draw();
    this.getApps();
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
          label: 'Invalid applications',
        },
        {
          data: [10, 58, 50, 60, 40, 15, 30],
          label: 'Partially valid applications',
        },
        { data: [15, 2, 23, 5, 10, 5, 10], label: 'Valid applications' },
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
            '#CBA041',
            '#CBA041',
            '#CBA041',
            '#CBA041',
            '#CBA041',
            '#CBA041',
            '#CBA041',
          ],
          borderColor: [
            '#CBA041',
            '#CBA041',
            '#CBA041',
            '#CBA041',
            '#CBA041',
            '#CBA041',
            '#CBA041',
          ],
          borderWidth: 2,
        },
        {
          backgroundColor: [
            '#707070',
            '#707070',
            '#707070',
            '#707070',
            '#707070',
            '#707070',
            '#707070',
          ],
          borderColor: [
            '#707070',
            '#707070',
            '#707070',
            '#707070',
            '#707070',
            '#707070',
            '#707070',
          ],
          borderWidth: 2,
        },
        {
          backgroundColor: [
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
          ],
          borderColor: [
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
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
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
          ],
          borderColor: [
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
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
          borderColor: '#CBA041',
          borderWidth: 2,
          pointBorderColor: '#CBA041',
          pointBackgroundColor: '#CBA041',
          // lineTension: 0.0,
        },
      ],
      chartLabels: ['', '', '', '', '', '', '', '', '', '', '', ''],
      chartColors: [
        {
          backgroundColor: [
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
          ],
          borderColor: [
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
            '#5F9547',
          ],
        },
        {
          // backgroundColor: 'rgba(0, 137, 132, .2)',
          borderColor: '#CBA041',
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
            '#CBA041',
            '#5F9547',
            '#FFFFFF',
            '#CBCBCB',
            '#000000',
          ],
          borderColor: ['', '', '#CBA041', '', '#5F9547'],
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
          backgroundColor: ['#CBA041', '#CBCBCB', '#5F9547'],
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
              '#CBA041',
              '#CBA041',
              '#CBA041',
              '#CBA041',
              '#CBA041',
              '#CBA041',
              '#CBA041',
            ],
            borderColor: [
              '#CBA041',
              '#CBA041',
              '#CBA041',
              '#CBA041',
              '#CBA041',
              '#CBA041',
              '#CBA041',
            ],
            borderWidth: 2,
          },
          {
            backgroundColor: [
              '#707070',
              '#707070',
              '#707070',
              '#707070',
              '#707070',
              '#707070',
              '#707070',
            ],
            borderColor: [
              '#707070',
              '#707070',
              '#707070',
              '#707070',
              '#707070',
              '#707070',
              '#707070',
            ],
            borderWidth: 2,
          },
          {
            backgroundColor: [
              '#5F9547',
              '#5F9547',
              '#5F9547',
              '#5F9547',
              '#5F9547',
              '#5F9547',
              '#5F9547',
            ],
            borderColor: [
              '#5F9547',
              '#5F9547',
              '#5F9547',
              '#5F9547',
              '#5F9547',
              '#5F9547',
              '#5F9547',
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
  getApps(){
    this.applicationServive.getApplications().subscribe(x =>{
      console.log(x);
       this.applications = x;
       this.applications = this.applications.length;
    });
  }
    draw() {
       var self:any = this;
      var gauge = function (container:any, configuration:any) {
      
        var config:any = {
          size: 710,
          clipWidth: 200,
          clipHeight: 110,
          ringInset: 20,
          ringWidth: 20,
  
          pointerWidth: 10,
          pointerTailLength: 5,
          pointerHeadLengthPercent: 0.9,
  
          minValue: 0,
          maxValue: 10,
  
          minAngle: -90,
          maxAngle: 90,
  
          transitionMs: 750,
  
          majorTicks: 4,
          labelFormat: d3.format('d'),
          labelInset: 10,
  
          arcColorFn: d3.interpolateHsl(d3.rgb('#D9E3E1'), d3.rgb(' #84A59D'))
        };
        var range:any = undefined;
        var r:any = undefined;
        var pointerHeadLength:any = undefined;
        var value = 0;
  
        var svg:any = undefined;
        var arc:any = undefined;
        var scale:any = undefined;
        var ticks:any = undefined;
        var tickData:any = undefined;
        var pointer:any = undefined;
  
        var donut = d3.pie();
  
        function deg2rad(deg:any) {
          return deg * Math.PI / 180;
        }
  
        function newAngle(d:any) {
          var ratio = scale(d);
          var newAngle = config.minAngle + (ratio * range);
          return newAngle;
        }
  
        function configure(configuration:any) {
         let prop:any = undefined;
          for ( prop in configuration) {
            config[prop] = configuration[prop];
          }
  
          range = config.maxAngle - config.minAngle;
          r = config.size / 2;
          pointerHeadLength = Math.round(r * config.pointerHeadLengthPercent);
  
          // a linear scale this.gaugemap maps domain values to a percent from 0..1
          scale = d3.scaleLinear()
            .range([0, 1])
            .domain([config.minValue, config.maxValue]);
  
          ticks = scale.ticks(config.majorTicks);
          tickData = d3.range(config.majorTicks).map(function () { return 1 / config.majorTicks; });
  
          arc = d3.arc()
            .innerRadius(r - 20 - config.ringInset)
            .outerRadius(r - config.ringInset)
            .startAngle(function (d:any, i:any) {
              var ratio = d * i;
              return deg2rad(config.minAngle + (ratio * range));
            })
            .endAngle(function (d:any, i:any) {
              var ratio = d * (i + 1);
              return deg2rad(config.minAngle + (ratio * range));
            });
        }
        self.gaugemap.configure = configure;
  
        function centerTranslation() {
          return 'translate(' + r + ',' + r + ')';
        }
  
        function isRendered() {
          return (svg !== undefined);
        }
        self.gaugemap.isRendered = isRendered;
  
        function render(newValue:any) {
          svg = d3.select(container)
            .append('svg:svg')
            .attr('class', 'gauge')
            .attr('width', 500)
            .attr('height', config.clipHeight)
            .attr('xmlns','http://www.w3.org/2000/svg');
  
          var centerTx = centerTranslation();
  
          var arcs = svg.append('g')
            .attr('class', 'arc')
            .attr('transform', "matrix("+1+","+ 0+","+ 0+","+ 1+","+ 174.255737+","+ 139.187576+")");
  
          arcs.selectAll('path')
            .data(tickData)
            .enter().append('path')
            .attr('fill', function (d:any, i:any) {
              return config.arcColorFn(d * i);
            })
            .attr('d', arc);
  
          // var lg = svg.append('g')
          //   .attr('class', 'label')
          //   .attr('transform', "matrix("+1+","+ 0+","+ 0+","+ 1+","+ 208.406281+","+ 160.778976+")");
          // lg.selectAll('text')
          //   .data(ticks)
          //   .enter().append('text')
          //   .attr('transform', function (d:any) {
          //     var ratio = scale(d);
          //     var newAngle = config.minAngle + (ratio * range);
          //     return 'rotate(' + newAngle + ') translate(0,' + (config.labelInset - r) + ')';
          //   })
          //   .text(config.labelFormat);
  
          var lineData = [[config.pointerWidth / 2, 0],
          [0, -pointerHeadLength],
          [-(config.pointerWidth / 2), 0],
          [0, config.pointerTailLength],
          [config.pointerWidth / 2, 0]];
          var pointerLine = d3.line().curve(d3.curveLinear)
          var pg = svg.append('g').data([lineData])
            .attr('class', 'pointer')
            .attr('transform', "matrix("+0.910261+","+ 0+","+ 0+","+ 0.605608+","+ 182.421082+","+ 73.232422+")");
  
          pointer = pg.append('path')
            .attr('d', "M 22.728 -67.629 L 17.617 -98.194 L 12.507 -67.629 L 17.617 -66.497 L 22.728 -67.629"/*function(d) { return pointerLine(d) +'Z';}*/)
            .attr('transform', "matrix(0.951057, 0.309017, -0.309017, 0.951057, -24.583891, -9.474379)")
            .attr('style','fill:#84A59D');
  
          update(newValue === undefined ? 0 : newValue);
        }
        self.gaugemap.render = render;
        function update(newValue:any, newConfiguration?:any) {
          if (newConfiguration !== undefined) {
            configure(newConfiguration);
          }
          var ratio = scale(newValue);
          var newAngle = config.minAngle + (ratio * range);
          pointer.transition()
            .duration(config.transitionMs)
            .ease(d3.easeElastic)
            .attr('transform', 'rotate(' + newAngle + ')');
        }
        self.gaugemap.update = update;
  
        configure(configuration);
  
        return self.gaugemap;
      };
  
      var powerGauge = gauge('#power-gauge', {
        size: 300,
        clipWidth: 300,
        clipHeight: 300,
        ringWidth: 60,
        maxValue: 10,
        transitionMs: 4000,
      });
      powerGauge.render(6);
  
    }
}
