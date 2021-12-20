import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import dashboardData from 'src/assets/locale-data/faculty-department-courses-graph-data.json';
import { DashboardDataModel } from 'src/app/_models';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  datatitle = 'All';
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  dashboardModels: DashboardDataModel[] = dashboardData;
  currentModel: DashboardDataModel | undefined;

  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {}

  onSelectedFaculty($event: any) {
    this.datatitle = $event;
    this.currentModel = this.dashboardModels.find(
      (x) => x.facultyName == this.datatitle
    );
  }
}
