import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

import { LoginTokenJwt } from '../interface/login-token-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly tokenKey = 'authToken';

  constructor() { }

  // Save the token in local storage
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Retrieve the token from local storage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Remove the token from local storage
  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }

    const decodedToken = jwtDecode<LoginTokenJwt>(token);
    const currentTime = Date.now() / 1000; // current time in seconds

    return decodedToken.exp > currentTime;
  }

  getUserId(): string{
    const token = this.getToken();
    if (!token) {
      return "No User Found!";
    }
    const decodedToken = jwtDecode<LoginTokenJwt>(token);
    return decodedToken.userId;
  }
  
}
