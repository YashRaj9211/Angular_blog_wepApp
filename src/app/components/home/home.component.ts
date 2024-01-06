import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AuthGuard } from '../../auth.guard';
import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private _authService: AuthService, private route:Router, private _apiService: ApiService){}
  allBlogPosts: any;
  ngOnInit() {
    // this._authService.clearToken();
    console.log(this._authService.isAuthenticated());
    
    
    this._apiService.getAllBlogPosts().subscribe(
      {
        next: (response) => {
          // console.log("Response")
          console.log(response);
          this.allBlogPosts = response;
        },
        error: (error) => {
          console.error(error);
          // Handle error
        },
      }
    )
  }

  
}
