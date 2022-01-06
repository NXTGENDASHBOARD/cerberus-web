import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, switchMap, tap } from 'rxjs/operators';
import { ApplicationService } from 'src/app/_services';
import { shortListActionTypes } from './shortlist.actions';

@Injectable()
export class ShortlistEffects {
  constructor(
    private actions$: Actions,
    private applicationService: ApplicationService,
    private router: Router
  ) {}

  loadApplications$ = createEffect(() =>
    this.actions$.pipe(
      ofType(shortListActionTypes.loadShortlists),
      switchMap(() => this.applicationService.getAll()),
      map((applications) =>
        shortListActionTypes.loadShortlistsCompleted({ applications })
      )
    )
  );

  
}
