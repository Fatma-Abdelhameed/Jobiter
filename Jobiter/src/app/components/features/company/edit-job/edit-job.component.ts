import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/_services/company.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {
  formData = {
    title:'',
    minExp:'',
    maxExp:'',
    level:'',
    type:'',
    requirements:'',
  }
  noChangesError:boolean = false
  dataUpdated:boolean = false
  constructor(public companySer:CompanyService, public token:TokenStorageService) { }
  saveChanges(data:any){
    if(data.touched){
      this.companySer.editJob(this.token.getUser().id, this.formData).subscribe({
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
    this.companySer.getJobDetails(this.token.getUser().id).subscribe({
      next:(data)=>{
        //this.formData = data
      }
    })
  }

}
