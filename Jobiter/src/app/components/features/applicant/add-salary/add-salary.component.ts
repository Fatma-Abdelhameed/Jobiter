import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-salary',
  templateUrl: './add-salary.component.html',
  styleUrls: ['./add-salary.component.css']
})
export class AddSalaryComponent implements OnInit {
  formData = {
    position:'',
    salary:''
  }
  constructor() { }
  add(){}
  ngOnInit(): void {
  }

}
