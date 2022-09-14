import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public username : string;
  public password : string;

  constructor() { }

  get user() : string
  {
    return this.username;
  }

  set user(user : string)
  {
    this.username = user;
  }

  get pass() : string
  {
    return this.password;
  }

  set pass(pass : string)
  {
    this.password = pass;
  }
}
