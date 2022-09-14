import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import Authorization from './authorization.json';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userInfo: LoginService) {}
  
  //validate username and password here
  //make another service for setter and getter


  
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
    
    console.log(this.userInfo)
    
    if( Authorization.includes(this.userInfo))
    {
      console.log("true")
      return true;
    }
    else
    {
      console.log("false")
      return false
    }
  }

  ngOnInit(): void 
  {
  
  }
}
