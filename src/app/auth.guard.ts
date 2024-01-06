import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate: CanActivateFn = (route, state) => {
    if (this.authService.isAuthenticated()) {
      return true;
    }

    // If not authenticated, redirect to login page
    this.router.navigate(['/login']);
    return false;
  }
}
