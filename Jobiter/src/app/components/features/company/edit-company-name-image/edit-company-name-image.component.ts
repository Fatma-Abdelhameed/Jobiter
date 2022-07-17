import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/_services/company.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-edit-company-name-image',
  templateUrl: './edit-company-name-image.component.html',
  styleUrls: ['./edit-company-name-image.component.css']
})
export class EditCompanyNameImageComponent implements OnInit {

  constructor(public companySer:CompanyService, public token:TokenStorageService) { }
  formData = {
    name:'',
    imageUrl:''
  }
  noChangesError:boolean = false
  dataUpdated:boolean = false
  saveChanges(data:any){
    if(data.touched){
      this.companySer.editNameImage(this.token.getUser().id, this.formData.name, this.formData.imageUrl).subscribe({
        next:(info)=>{
          this.dataUpdated = true
          this.token.saveUser(info)
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
        this.formData.name = data.companyName
        this.formData.imageUrl = data.imageUrl
      }
    })
  }

}
