import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/_services/company.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {
  formData = {
    job_title:'',
    level:'',
    job_type:'',
    work_type:'',
    Description:'',
    salary:12000
  }
  resData:any
  noChangesError:boolean = false
  dataUpdated:boolean = false
  constructor(public companySer:CompanyService, public token:TokenStorageService,public route:ActivatedRoute) { }
  saveChanges(data:any){
    if(data.touched){
      this.companySer.editJob(this.route.snapshot.params['id'], this.formData).subscribe({
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
    this.companySer.getJobDetails(this.route.snapshot.params['id']).subscribe({
      next:(data)=>{
        this.resData = data
        this.formData.job_title=this.resData.job_title
        this.formData.level = this.resData.level
        this.formData.Description=this.resData.Description
        this.formData.job_type=this.resData.job_type
        this.formData.work_type=this.resData.work_type
        
      }
    })
  }

}
