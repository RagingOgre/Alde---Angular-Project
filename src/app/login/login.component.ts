import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

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

  validate(event:any)
  {

    this.userInfo.user = this.login.value.username;
    this.userInfo.pass = this.login.value.password;
    this.userInfo.username = this.login.value.username;
    this.userInfo.password = this.login.value.password;
    
    console.log(Authorization)
    console.log(this.userInfo)

    //foreach loop for authorization

     Authorization.forEach(entries => {
      if(entries = this.userInfo)
      {
        console.log("true")
        this.authServ.isAuthenticated = true;
      }
      else
      {
        console.log("false")
        this.authServ.isAuthenticated = false;
      }
      
    });
  }

  ngOnInit(): void 
  {
  
  }
}
