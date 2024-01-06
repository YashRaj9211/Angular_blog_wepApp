import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { UserRegistration } from '../../interface/user-registration';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})


export class RegisterUserComponent {

  constructor(
    private _apiService: ApiService,
  ){}
  name: string = '';
  username: string = '';
  email: string = '';
  password: string = '';

  

  postUserData(){
    const userData:UserRegistration = {
      name : this.name,
      userName: this.username,
      email: this.email,
      password: this.password
    }

    this._apiService.registerUser(userData).subscribe({
      next: (response) => {
        console.log(response);
        // Here, handle the successful response
        // For example, navigate to another page or show a success message
      },
      error: (error) => {
        // The error will be automatically caught by the global error handler
        // You don't need to log it or show it here unless you want to handle it specifically
        // For specific error handling, you can still do it here
        // Example: if(error.status === 404) { // handle not found }
      }
    });
    
  }

  printvalue(){
    console.log(this.name + this.username + this.email + this.password);
  }

}
