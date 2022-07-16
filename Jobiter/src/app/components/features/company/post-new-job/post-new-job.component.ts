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
    minExp:'',
    maxExp:'',
    level:'',
    type:'',
    requirements:'',
  }
  insertedJob:boolean = false
  constructor(public company:CompanyService) { }
  postJob(data:any){
    if(data.valid){
      this.company.postNewJob(this.formData.title, this.formData.level, this.formData.type,
        Number(this.formData.minExp), Number(this.formData.maxExp), this.formData.requirements).subscribe({
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
