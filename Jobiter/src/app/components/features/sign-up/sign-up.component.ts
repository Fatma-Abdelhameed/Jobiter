import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/_models/company';
import { AuthenticationService } from 'src/app/_services/authentication.service';

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
  constructor(public router : Router, public auth:AuthenticationService) { 
  }
  signUp(data:any){
    if(data.valid){
      this.auth.isLogged = 'true'
      this.auth.currentUserType = 'company'
      sessionStorage.setItem('isLogged', String(this.auth.isLogged))
      sessionStorage.setItem('currentUserType', this.auth.currentUserType)
      this.router.navigateByUrl('company')
    }
  }
  ngOnInit(): void {
  }

}
