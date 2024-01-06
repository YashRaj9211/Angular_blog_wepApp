import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';
import { UserLogin } from '../../interface/user-login';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css',
})
export class UserLoginComponent {
  userName: string = '';
  password: string = '';

  constructor(private _apiService: ApiService, private router: Router, private authService: AuthService) {}

  postUserData_login() {
    const userData: UserLogin = {
      userName: this.userName,
      password: this.password,
    };

    this._apiService.loginUser(userData).subscribe({
      next: (response) => {
        console.log(response);
        if (response.status === 200 && response.body.token) {
          this.authService.setToken(response.body.token);
          // console.log(this.authService.getToken())
          console.log('Login successful\n');
          console.log(this.authService.isAuthenticated());
          console.log(this.authService.getUserId());
          this.router.navigate(['/']);
        }
        // console.log(response)
        // Here, handle the successful response
        // For example, navigate to another page or show a success message
      },
      error: (error) => {
        console.log(error);
        // The error will be automatically caught by the global error handler
        // You don't need to log it or show it here unless you want to handle it specifically
        // For specific error handling, you can still do it here
        // Example: if(error.status === 404) { // handle not found }
      },
    });
  }
}
