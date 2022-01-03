import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/reducers';
import { ApplicationModel } from 'src/app/_models';
import { getAllShortlists } from '../../store/shortlist.selectors';
 
@Component({
  selector: 'app-recent-applications-list',
  templateUrl: './recent-applications-list.component.html',
  styleUrls: ['./recent-applications-list.component.scss']
})
export class RecentApplicationsListComponent implements OnInit {

  shortLists$: Observable<ApplicationModel[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.shortLists$ = this.store.select(getAllShortlists);
  }

}
