import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { AppState } from '../store/app.states';

@Injectable({
  providedIn: 'root'
})
export class EncoderApiService {
  apiURL: string = 'http://localhost:3001/api/v1/encoder/';

  constructor(
    private httpClient: HttpClient,
    private store: Store<AppState>,
    private router: Router,
  ) { }

  encode(term: string) {
    const observable = this.store.select(state => state.auth.token);
    let authToken: string = '';
    observable.subscribe(token => {
      if (!token) {
        this.router.navigate(['/login']);
        throw new Error('No token');
      }
      authToken = token;
    });
    return this.httpClient.post<{ encodedString: string }>(`${this.apiURL}`, { string: term }, { headers: { 'Authorization': authToken, 'Content-Type': 'application/json; charset=utf-8' } });
  }
}