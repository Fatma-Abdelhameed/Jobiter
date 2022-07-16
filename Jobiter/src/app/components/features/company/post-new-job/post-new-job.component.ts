import { Component, OnInit } from '@angular/core';

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
  constructor() { }
  postJob(data:any){
    console.log(data)
  }
  ngOnInit(): void {
  }

}
