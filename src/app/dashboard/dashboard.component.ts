import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import employeeData from '../../assets/employees.json';
import { Employee } from './employee';

@Component({
  
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})
export class DashboardComponent implements OnInit {

  employees = employeeData;
  
  display !: boolean;

  employee !: Employee[];
  
  
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

  dataEmployee : Array<any> = [];
  newData: any = {};

  insertForm()
  {
    console.log(this.employeeInformation.value);
    this.dataEmployee.push(this.employeeInformation.value);
    
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
  }

}
