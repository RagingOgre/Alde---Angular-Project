import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import employeeData from '../../assets/employees.json';
import { LoginService } from '../login/login.service';
import { AuthService } from '../shared/auth.service';

@Component({
  
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})
export class DashboardComponent implements OnInit {

  constructor(public authServ: AuthService, public loginServ: LoginService,){}
  
  display : boolean;

  employees = employeeData;
  
  employee : Array<any>;
  

  loginService : string;

  checkNotDuplicate : boolean;
  checkFirst : any;
  checkLast : any;

  employeeInformation = new FormGroup(
    {
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      nationality: new FormControl('', [Validators.required]),
      company: new FormControl('', [Validators.required]),
      designation: new FormControl('', [Validators.required]),
      workExp: new FormControl('', [Validators.required]),
      cv: new FormControl('', [Validators.required]),
      source: new FormControl('', [Validators.required]),
    }
  );



  insertForm()
  {
    const arrayCaster = this.employeeInformation.value as any
    this.employees.forEach(entries => 
      {
        console.log(entries.firstName == arrayCaster.firstName && entries.lastName == arrayCaster.lastName)
      
          if(entries.firstName == arrayCaster.firstName && entries.lastName == arrayCaster.lastName)
          {
            entries.country = arrayCaster.country
            entries.nationality = arrayCaster.nationality
            entries.company = arrayCaster.company
            entries.designation = arrayCaster.designation
            entries.workExp = arrayCaster.workExp
            entries.cv = arrayCaster.cv
            entries.source = arrayCaster.source

            this.employees.push();
            this.checkNotDuplicate = false;
            this.checkFirst = entries.firstName;
            this.checkLast = entries.lastName;
          }
          else
          {
            this.checkNotDuplicate = true
          }
        
      })
    
    if(this.checkNotDuplicate == true)
    {
      if(this.checkFirst == arrayCaster.firstName && this.checkLast == arrayCaster.lastName)
      {
        this.employees.push()
      }
      else
      {
        this.employees.push(arrayCaster);
      }
      
    }
  }

  logout()
  {
    this.authServ.isAuthenticated = false
  }

  transferData(event:any)
  {
    this.display = true;
    this.employeeInformation.patchValue
    (
      {
        firstName: event.data.firstName,
        lastName: event.data.lastName,
        country: event.data.country,
        nationality: event.data.nationality,
        company: event.data.company,
        designation: event.data.designation,
        workExp: event.data.workExp,
        source: event.data.source
      }
    )
    
  }

  resetForm()
  {
    this.employeeInformation.reset();
  }

  ngOnInit()
  {
    this.loginService = this.loginServ.firstName + " " +this.loginServ.lastName
    console.log(this.employees)
  }

}
