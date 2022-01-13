import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tabs } from 'src/app/shared';
import { ApplicationService } from 'src/app/_services';
 
@Component({
  selector: 'app-home-navigation',
  templateUrl: './home-navigation.component.html',
  styleUrls: ['./home-navigation.component.scss'],
})
export class HomeNavigationComponent implements OnInit {
  datatitle:any;
  tabs = tabs;
  selected = new FormControl(0);
  @Output() selectedFaculty = new EventEmitter<any>();
  constructor(private applicationService:ApplicationService) {}

  ngOnInit(): void {}

  tabClicked() {
    this.datatitle = this.tabs[this.selected.value]
    if(this.selected.value > 0){
      this.applicationService.setState(true);
    }
    this.selectedFaculty.emit(this.tabs[this.selected.value]);
  }
}
