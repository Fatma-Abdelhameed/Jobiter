import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/_services/company.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-edit-company-basic-info',
  templateUrl: './edit-company-basic-info.component.html',
  styleUrls: ['./edit-company-basic-info.component.css']
})
export class EditCompanyBasicInfoComponent implements OnInit {
  formData = {
    address:'',
    city:'',
    phone:'',
    size: 0,
    industry:'',
    startedAt:'',
    website:''
  }
  noChangesError:boolean = false
  dataUpdated:boolean = false

  constructor(public companySer:CompanyService, public token:TokenStorageService) { }
  saveChanges(data:any){
    if(data.touched){
      this.companySer.editBasicInfo(this.token.getUser().id, this.formData.address, this.formData.city,
      this.formData.industry, this.formData.startedAt, this.formData.size, this.formData.website).subscribe({
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
        this.formData = data
      }
    })
  }

}
