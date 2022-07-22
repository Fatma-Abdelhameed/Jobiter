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
    email:'',
    password:''
  }
  constructor(public router : Router, public auth:AuthenticationService, public token:TokenStorageService) { 
  }
  signUp(data:any){
    if(data.valid){
      this.auth.login(this.formData.email, this.formData.password).subscribe({
          next: user=>{
            this.auth.isLogged = 'true'
            //this.auth.currentUserType = user.type
            sessionStorage.setItem('isLogged', String(this.auth.isLogged))
            sessionStorage.setItem('currentUserType', this.auth.currentUserType)
            //this.token.saveToken(data.token)
            this.token.saveUser(user)
          },
          error:()=>{

          },
          complete:()=>{
            if(sessionStorage.getItem('currentUserType') == 'company'){
              this.router.navigateByUrl('company')
            }else if(sessionStorage.getItem('currentUserType') == ''){
              this.router.navigateByUrl('applicant')
            }
          }
        })
    }
  }

  ngOnInit(): void {
  }

}
