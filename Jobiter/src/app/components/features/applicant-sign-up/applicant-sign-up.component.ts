import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicantService } from 'src/app/_services/applicant.service';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

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
    dob:'',
    gender:'',
    image:'',
    cv:''
  }
  cities:[] = []
  constructor(public router : Router, public auth:AuthenticationService, public token:TokenStorageService, public applicant:ApplicantService) { }
  signUp(form:any){
    if(form.valid){
      this.auth.applicantSignUp(this.formData.firstname, this.formData.lastname, this.formData.email,
        this.formData.password, this.formData.confirm_password, this.formData.job_title, this.formData.phone,
        this.formData.city, this.formData.level, this.formData.faculty, this.formData.dob,
        this.formData.gender, this.formData.image, this.formData.cv).subscribe({
          next: applicant=>{
            /*this.auth.isLogged = 'true'
            this.auth.currentUserType = 'applicant'
            sessionStorage.setItem('isLogged', String(this.auth.isLogged))
            sessionStorage.setItem('currentUserType', this.auth.currentUserType)
            //this.token.saveToken(data.token)
            this.token.saveUser(applicant)*/
          }
        })
      this.router.navigateByUrl('login')
    }
  }
  ngOnInit(): void {
    this.applicant.getCities().subscribe({
      next:(city)=>{
        //this.cities.push(city)
      }
    })
  }

}
