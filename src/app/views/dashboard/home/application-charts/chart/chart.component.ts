import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() chartType: string;
  @Input() isLegend: boolean;
  @Input() chartDatasets: Array<any>;
  @Input() chartLabels: Array<any>;
  @Input() chartColors: Array<any>;
  @Input() chartOptions: any;
  @Output() chartClickedEvent = new EventEmitter<any>();
 
  constructor() { }

  ngOnInit(): void {
  }

  chartClicked($event: any) {
    this.chartClickedEvent.emit($event);
  }

}
