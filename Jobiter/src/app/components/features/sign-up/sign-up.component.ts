import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/_models/company';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  formData = {
    name:'',
    username:'',
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
  constructor(public router : Router, public auth:AuthenticationService, public token:TokenStorageService) { 
  }
  signUp(data:any){
    if(data.valid){
      this.auth.companySignUp(this.formData.name, this.formData.email, this.formData.username, this.formData.password,
        this.formData.confirmPassword, this.formData.phone, this.formData.address, this.formData.city, 
        this.formData.industry, this.formData.startedAt, this.formData.size, this.formData.imageUrl,
        this.formData.websiteLink,this.formData.about).subscribe({
          next: company=>{
            this.auth.isLogged = 'true'
            this.auth.currentUserType = 'company'
            sessionStorage.setItem('isLogged', String(this.auth.isLogged))
            sessionStorage.setItem('currentUserType', this.auth.currentUserType)
            //this.token.saveToken(data.token)
            this.token.saveUser(company)
          }
        })
      this.router.navigateByUrl('company')
    }
  }
  ngOnInit(): void {
  }

}
