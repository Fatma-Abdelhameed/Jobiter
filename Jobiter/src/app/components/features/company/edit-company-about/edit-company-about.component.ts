import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/_services/company.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-edit-company-about',
  templateUrl: './edit-company-about.component.html',
  styleUrls: ['./edit-company-about.component.css']
})
export class EditCompanyAboutComponent implements OnInit {
  formData = {
    about:''
  }
  noChangesError:boolean = false
  dataUpdated:boolean = false
  constructor(public companySer:CompanyService, public token:TokenStorageService) { }
  saveChanges(data:any){
    if(data.touched){
      this.companySer.editAbout(this.token.getUser().id, this.formData.about).subscribe({
        next:(info)=>{
          this.dataUpdated = true
          
        },
        error:()=>{

        }
      })
    }
    else{
      this.noChangesError = true
    }
  }
  ngOnInit(): void {
    this.companySer.getCompanyDetails(this.token.getUser().id).subscribe({
      next:(data)=>{
        this.formData.about = data.about
      }
    })
  }

}
