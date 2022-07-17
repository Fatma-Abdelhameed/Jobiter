import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/_services/company.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  formData = {
    password: '',
    confirmPassword: ''
  }
  constructor(public companySer:CompanyService, public token:TokenStorageService) { }
  changePass(){
    this.companySer.changePassword(this.token.getUser().id,
     this.formData.password, this.formData.confirmPassword).subscribe({
        next:()=>{

        },
        error:()=>{
          
        }
     })
  }
  ngOnInit(): void {
  }

}
