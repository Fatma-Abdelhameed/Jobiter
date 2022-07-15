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
  constructor() { 
  }
  
  ngOnInit(): void {
  }

}
