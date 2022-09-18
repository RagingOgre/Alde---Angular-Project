import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public username : string;
  public password : string;

  public fName : string;
  public lName : string;

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

  get firstName() : string
  {
    return this.fName;
  }

  set firstName(fName : string)
  {
    this.fName = fName;
  }

  get lastName() : string
  {
    return this.lName;
  }

  set lastName(lName : string)
  {
    this.lName = lName;
  }
}
