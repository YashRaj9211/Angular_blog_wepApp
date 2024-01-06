import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navabr',
  templateUrl: './navabr.component.html',
  styleUrl: './navabr.component.css'
})
export class NavabrComponent implements OnInit {
  
  constructor(private _authService: AuthService, private _router: Router){}

  username: string = '';
  isLoggedIn: boolean = false;
  ngOnInit(): void {
    this.username = this._authService.getUserId();
    this.checkLoginState();
  }
  logout() {
    console.log("logout");
    this._authService.clearToken(); 
    this.checkLoginState();
    this._router.navigate(['/login']);
  } 
  
  checkLoginState(): boolean{
    return this.isLoggedIn = this._authService.isAuthenticated();
  }

  
}
