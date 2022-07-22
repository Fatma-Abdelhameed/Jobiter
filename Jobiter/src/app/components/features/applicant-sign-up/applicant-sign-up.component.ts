import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicant-sign-up',
  templateUrl: './applicant-sign-up.component.html',
  styleUrls: ['./applicant-sign-up.component.css']
})
export class ApplicantSignUpComponent implements OnInit {
  formData = {
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    confirm_password:'',
    job_title:'',
    phone:'',
    city:'',
    level:'',
    faculty:'',
    date_of_birth:'',
    gender:'',
    profile_image:'',
    cv:''
  }
  constructor() { }
  signUp(form:any){
    
  }
  ngOnInit(): void {
  }

}
