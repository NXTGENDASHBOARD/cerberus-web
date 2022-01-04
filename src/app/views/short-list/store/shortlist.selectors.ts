import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as reducer from '../store/shortlist.reducer';

export const shortlistsFeatureSelector =
  createFeatureSelector<reducer.ShortlistState>(reducer.shortlistFeatureKey);

export const getAllShortlists = createSelector(
  shortlistsFeatureSelector,
  reducer.selectAll
);


export const areShortlistsLoaded = createSelector(
    shortlistsFeatureSelector,
    (state) => state.shortlistsLoaded
);