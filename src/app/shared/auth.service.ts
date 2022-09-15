import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn : boolean;

  constructor() { }

  get isAuthenticated()
  {
    return this.isLoggedIn;
  }

 set isAuthenticated(isAuth : boolean)
 {
  this.isLoggedIn = isAuth;
 }
}
