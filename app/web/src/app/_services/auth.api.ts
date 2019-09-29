import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  apiURL: string = 'http://localhost:3001/api/v1/login/';

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string) {
    return this.httpClient.post<{ token: string }>(`${this.apiURL}`, { email, password });
  }
}