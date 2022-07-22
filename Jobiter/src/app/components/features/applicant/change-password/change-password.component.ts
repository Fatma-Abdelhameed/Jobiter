import { Component, OnInit } from '@angular/core';
import { ApplicantService } from 'src/app/_services/applicant.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  formData = {
    password:'',
    confirmPassword:''
  }
  constructor(public apllicantSer:ApplicantService, public token:TokenStorageService) { }
  changePass(){
    this.apllicantSer.changePassword(this.token.getUser().id, this.formData.password).subscribe()
  }
  ngOnInit(): void {
  }

}
