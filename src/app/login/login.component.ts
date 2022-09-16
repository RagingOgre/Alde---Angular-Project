import { Component, Inject, inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

import Employee from '../../assets/employees.json';
import Authorization from './authorization.json';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userInfo: LoginService, public authServ: AuthService) {}


  login = new FormGroup(
    {
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    }
  );

  validate()
  {

    this.userInfo.user = this.login.value.username;
    this.userInfo.pass = this.login.value.password;
    this.userInfo.username = this.login.value.username;
    this.userInfo.password = this.login.value.password;

    
     Authorization.forEach(entries => {
      for(let i = 0; i < Authorization.length; i++)
      {
        if(entries.username == this.userInfo.username && entries.password == this.userInfo.password && this.userInfo.user != "" && this.userInfo.password != "")
        {
          this.authServ.isAuthenticated = true;
          this.authServ.isLoggedIn = true
          console.log(this.authServ.isAuthenticated)

          break;
        }
      }
      return this.authServ.isAuthenticated
    });
    return this.authServ.isAuthenticated
    
  }

  ngOnInit(): void 
  {
  
  }
}
