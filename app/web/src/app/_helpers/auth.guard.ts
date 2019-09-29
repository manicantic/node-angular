import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '../store/app.states';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private store: Store<AppState>
  ) { }

  canActivate() {
    const observable = this.store.select(state => state.auth.token);
    observable.subscribe(token => {
      if (!token) {
        this.router.navigate(['/login']);
        return false;
      }
    });

    return true;
  }
}