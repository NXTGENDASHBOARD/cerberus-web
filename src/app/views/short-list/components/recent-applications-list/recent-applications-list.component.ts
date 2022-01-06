import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tabs } from 'src/app/shared';
import { AppState } from 'src/app/store/reducers';
import { ApplicationModel } from 'src/app/_models';
import { getAllShortlists } from '../../store/shortlist.selectors';

export interface TabModel {
  label: string;
  shortlists: ApplicationModel[]; 
}

@Component({
  selector: 'app-recent-applications-list',
  templateUrl: './recent-applications-list.component.html',
  styleUrls: ['./recent-applications-list.component.scss'],
})
export class RecentApplicationsListComponent implements OnInit {
  shortLists: ApplicationModel[];
  qualifications: string[] = [
    'Qualification A',
    'Qualification B',
    'Qualification C',
    'Qualification D',
  ];

 dataTabs: TabModel[];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(getAllShortlists).subscribe(data => {
      this.shortLists = data;   
      this.dataTabs = [
        {
          label:"Most recent",
          shortlists: this.shortLists
        },
        {
          label:"Filters",
          shortlists: this.shortLists
        }
      ];   
    });

  
  }
  tabs = tabs;
  selected = new FormControl(0);
  @Output() selectedRecentAppsFaculty = new EventEmitter<any>();

  tabClicked() {
    this.selectedRecentAppsFaculty.emit(this.tabs[this.selected.value]);
  }
}
