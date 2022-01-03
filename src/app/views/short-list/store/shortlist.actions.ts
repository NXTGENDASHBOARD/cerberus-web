import { createAction, props } from '@ngrx/store';
import { ApplicationModel } from 'src/app/_models';

export const loadShortlists = createAction(
  '[Shortlist List] Load Shortlists'
);

export const loadShortlistsCompleted = createAction(
  '[Shortlist List] ShortLists loaded  successfully',
  props<{applications: ApplicationModel[]}>()
);

export const updateShortlist = createAction(
  '[Shortlist List Operation] Update application',
  props<{application: ApplicationModel}>()
);

export const updateShortlistCompleted = createAction(
  '[Shortlist List Operation] Update application successfully',
  props<{application: ApplicationModel}>()
);

export const shortListActionTypes = {
  loadShortlists,
  loadShortlistsCompleted,
  updateShortlist,
  updateShortlistCompleted
}