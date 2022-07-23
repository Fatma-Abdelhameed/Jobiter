import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/_services/company.service';

@Component({
  selector: 'app-post-new-job',
  templateUrl: './post-new-job.component.html',
  styleUrls: ['./post-new-job.component.css']
})
export class PostNewJobComponent implements OnInit {
  formData = {
    title:'',
    level:'',
    status:'',
    type:'',
    requirements:'',
    salary:''
  }
  insertedJob:boolean = false
  constructor(public company:CompanyService) { }
  postJob(data:any){
    if(data.valid){
      this.company.postNewJob(this.formData.title, this.formData.level, this.formData.type,
        this.formData.status, this.formData.requirements,this.formData.salary).subscribe({
          next:()=>{
            this.insertedJob = true
          },
          error:(err)=>{
            
          }
        })
    }
  }
  ngOnInit(): void {
  }

}
