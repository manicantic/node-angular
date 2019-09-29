import { createReducer, on, Action } from '@ngrx/store';

import * as authActions from '../actions/auth.actions';

export interface State {
  token: string | null;
}

export const initialState: State = {
  token: null
};

export const authReducer = createReducer(
  initialState,
  on(authActions.loggedIn, (state, { token }) => ({ ...state, token })),
  on(authActions.loggedOut, state => ({ ...state, token: null }))
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}