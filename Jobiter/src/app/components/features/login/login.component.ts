import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formData = {
    username:'',
    password:''
  }
  response:any
  constructor(public router : Router, public auth:AuthenticationService, public token:TokenStorageService) { 
  }
  Login(data:any){
    if(data.valid){
      this.auth.login(this.formData.username, this.formData.password).subscribe({
          next: res=>{
            this.response=res
            if(this.response.id){
                this.auth.isLogged = 'true'
                sessionStorage.setItem('isLogged', String(this.auth.isLogged))
                sessionStorage.setItem('currentUserType', this.response.userType)
                this.auth.currentUserType = sessionStorage.getItem('currentUserType')
                
                this.token.saveUser(this.response)
                if(this.auth.currentUserType== 'COMPANY'){
                  this.router.navigateByUrl('/company')
                }else if(this.auth.currentUserType == 'EMPLOYEE'){
                  this.router.navigateByUrl('/applicant')
                }
            }
            
          },
          error:()=>{

          },
          complete:()=>{
          }
        })
    }
  }

  ngOnInit(): void {
  }

}
