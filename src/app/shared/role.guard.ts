import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Authorization from '../login/authorization.json'

interface userData
  {
    username: String;
    password: String;
  }

@Injectable({
  providedIn: 'root'
})

export class RoleGuard implements CanActivate {

  userAuthentication: userData[] = Authorization;

  canActivate()
  {
    
    let Role = localStorage.getItem("userAuthentication");
    if (Role == "brendenWagner")
    {
      return true;
    }
    return false;
  }
  
}
