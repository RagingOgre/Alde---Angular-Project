import { Component, OnInit } from '@angular/core';
import employeeData from '../../assets/employees.json';
@Component({
  
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})
export class DashboardComponent implements OnInit {

  employees = employeeData;
  
  display !: boolean;

  ngOnInit()
  {
  }

}
