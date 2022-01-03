import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { ApplicationModel } from 'src/app/_models';
import { shortListActionTypes } from './shortlist.actions';

export const shortlistFeatureKey = 'shortlists';

export interface ShortlistState extends EntityState<ApplicationModel> {
  shortlistsLoaded: boolean;
}

export const adapter: EntityAdapter<ApplicationModel> =
  createEntityAdapter<ApplicationModel>({
    selectId: (application: ApplicationModel) => application.id,
  });

export const initialState = adapter.getInitialState({
  shortlistsLoaded: false,
});

export const shortListReducer = createReducer(
  initialState,

  on(shortListActionTypes.loadShortlistsCompleted, (state, action) => {
    return adapter.addMany(action.applications, {
      ...state,
      shortlistsLoaded: true,
    });
  })


);

export const { selectAll, selectIds } = adapter.getSelectors();