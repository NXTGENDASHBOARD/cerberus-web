import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from "d3";
import { ApplicationService } from 'src/app/_services/application/application.service';

import jspdf from 'jspdf';
import html2canvas from 'html2canvas';  
import { IChart } from 'src/app/_models';

@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.scss']
})
export class GaugeChartComponent implements OnInit {
  single:IChart[] = [];
  view: any = [500, 300];
  legend: boolean = true;
  legendPosition:any = 'below';

  colorScheme :any = {
    domain: ['#5F9547']
  };



  gaugemap = {};
  public applications:any = [];
  constructor(private applicationServive:ApplicationService) {
    
    
  }
    ngOnInit() {
    this.draw();
    this.getApps();
  }
  
  
  
  public captureScreen()  
  {  
    var data = document.getElementById('content');
    var  hiddenDiv = document.getElementById('dropdown');
    if(hiddenDiv !==null){
      hiddenDiv.style.display = 'none';  
    }
    if(data !== null){
      html2canvas(data).then(canvas => {  
        // Few necessary setting options  
        var imgWidth = 208;   
        var pageHeight = 295;    
        var imgHeight = canvas.height * imgWidth / canvas.width;  
        var heightLeft = imgHeight;  
    
        const contentDataURL = canvas.toDataURL('image/png')  
        let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
        var position = 0;  
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
        pdf.save('Gauge_Chart.pdf'); // Generated PDF   
      });
      if(hiddenDiv !==null){
        hiddenDiv.style.display = 'block';  
      }
    }
    
  }  
getApps(){
  this.applicationServive.getApplications().subscribe((x:any) =>{
    // 
   
        this.single.push({ name: '', value: x.length });

        this.single = [...this.single];
     console.log(this.single)
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

        majorTicks: 1,
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
          .attr('transform', "matrix("+1+","+ 0+","+ 0+","+ 1+","+ 143.607697+","+ 184.08931+")");

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
          .attr('transform', "matrix("+0.910261+","+ 0+","+ 0+","+ 0.605608+","+ 133.34021+","+ 112.004562+")");

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
