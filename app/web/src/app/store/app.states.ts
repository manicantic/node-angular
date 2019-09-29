import { createFeatureSelector } from '@ngrx/store';

import * as auth from './reducers/auth.reducers';


export interface AppState {
  auth: auth.State;
}

export const reducers = {
  auth: auth.reducer
};