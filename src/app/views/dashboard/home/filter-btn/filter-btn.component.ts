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
up = true;
down = false;
count: number = 0;
  constructor(private campusService:CampusService) { }

  ngOnInit(): void {
    this.getCampuses();
  
  }
  isEven(n:any) {
    return n % 2 == 0;
 }
  clickedUp(){
   // console.log(this.count++)

    this.count++;

    if(this.isEven(this.count)){
      this.up = false;
    }else{
      this.up = true;
    }
    // console.log(this.isEven(this.count))
     console.log(this.up)
  }
  clickedDown(){
    this.up = false
    this.down = true;
    console.log('clicked')
  }
  getCampuses(){
    this.campusService.getCampuses().subscribe(data => {
      console.log(data);
       this.campuses = data;
    });
  }

}
