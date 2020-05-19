import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://ng-jira.herokuapp.com/api';

  async login({email, password}) {
    const response = await fetch(`${this.apiUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    return response;
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  saveToken(data) {
    sessionStorage.setItem('token', `JWT ${data.token}`);
  }

  clearToken() {
    sessionStorage.removeItem('token');
  }
}
