import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApplicantService} from "../../../../_services/applicant.service";
import {TokenStorageService} from "../../../../_services/token-storage.service";

@Component({
  selector: 'app-add-interview-questions',
  templateUrl: './add-interview-questions.component.html',
  styleUrls: ['./add-interview-questions.component.css']
})
export class AddInterviewQuestionsComponent implements OnInit {
  formData = {
    position:'',
    questions:'',
    description:'',
    answers:'',
  }
  constructor(public applicantSer:ApplicantService, public token:TokenStorageService, public route:ActivatedRoute) { }
  addQuestions(form:any){
    if(form.valid){
      this.applicantSer.addInterviewQuestions(this.route.snapshot.params['id'], this.formData).subscribe()
    }
  }
  ngOnInit(): void {
  }

}
