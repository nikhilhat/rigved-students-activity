import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employees = [
    {name : "Nikhil", gender : "male", address: {state: "MH", city : "NGP"}},
    {name : "Gayu", gender : "female", address: {state: "KA", city : "BLR"}},
    {name : "Anki", gender : "female", address : {state : "WB", city : "KAL"}},
    {name : "Pankaj", gender : "male", address: {state: "MH", city : "PNQ"}},
    {name : "Vaibh", gender : "male", address : {state : "TL", city : "HYD"}}
    ];
}
