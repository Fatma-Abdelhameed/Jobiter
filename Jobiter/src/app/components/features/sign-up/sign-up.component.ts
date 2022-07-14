import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/_models/company';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  formData = {
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
    phone:'',
    address:'',
    city:'',
    industry:'',
    startedAt:'',
    size:'',
    imageUrl:'',
    websiteLink:'',
    about:''
  }
  formErrors = {
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
    phone:'',
    address:'',
    city:'',
    industry:'',
    startedAt:'',
    size:'',
    imageUrl:'',
    websiteLink:'',
    about:''
  }
  company:Company = new Company(0, '', '', '', 0, '', '', '', '', 0, '', '', '')
  show(t:any){
    console.log(t.invalid)
  }
  constructor() { 
  }
  
  ngOnInit(): void {
  }

}
