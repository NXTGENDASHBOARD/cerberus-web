import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';
import { AppState } from 'src/app/store/reducers';
import { areShortlistsLoaded, loadShortlists } from './store';

@Injectable()
export class ShortlistResolver implements Resolve<Observable<any>> {
  constructor(private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Observable<Observable<any>> | Promise<Observable<any>> {
    return this.store.pipe(
      select(areShortlistsLoaded),
      tap((loadShortlistsCompleted) => {
        if (!loadShortlistsCompleted) {
          this.store.dispatch(loadShortlists());
        }
      }),
      filter((loadShortlistsCompleted) => loadShortlistsCompleted),
      first()
    );
  }
}
