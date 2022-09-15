import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
//call service in auth guard
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){};
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean
    {
      let isLoggedIn = this.authService.isAuthenticated;
      console.log(isLoggedIn);
      if (isLoggedIn)
      {
        console.log('CanActivate called true');
        return true
      } 
      else 
      {
        console.log('CanActivate false');
        this.router.navigate(['/login']);
        return false;
      }
    }
  
}
