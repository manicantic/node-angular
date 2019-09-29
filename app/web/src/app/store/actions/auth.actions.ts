import { createAction, props } from '@ngrx/store';

export const loggedIn = createAction('[Log In Page] Logged in', props<{ token: string }>());
export const loggedOut = createAction('[Log In Page] Logged out');
