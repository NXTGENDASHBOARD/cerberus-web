import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
 
@Component({
  selector: 'app-home-navigation',
  templateUrl: './home-navigation.component.html',
  styleUrls: ['./home-navigation.component.scss'],
})
export class HomeNavigationComponent implements OnInit {
  tabs = [
    'Analytics',
    'Sciences',
    'Commerce',
    'Law',
    'Management',
    'Engineering',
    'Health Sciences',
    'Humanities',
    'Environmental Studies',
    
  ];
  selected = new FormControl(0);
  @Output() selectedFaculty = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  tabClicked() {    
    this.selectedFaculty.emit(this.tabs[this.selected.value]);
  }
}
