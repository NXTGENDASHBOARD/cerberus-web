import { Component, OnInit } from '@angular/core';
import { CampusService } from 'src/app/_services/campus/campus.service';

@Component({
  selector: 'app-filter-btn',
  templateUrl: './filter-btn.component.html',
  styleUrls: ['./filter-btn.component.scss']
})
export class FilterBtnComponent implements OnInit {
public campuses:any = [];
showFiller = false;
  constructor(private campusService:CampusService) { }

  ngOnInit(): void {
    this.getCampuses();
  
  }
  getCampuses(){
    this.campusService.getCampuses().subscribe(data => {
      console.log(data);
       this.campuses = data;
    });
  }

}
