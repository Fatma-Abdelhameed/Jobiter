import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Job } from '../_models/job';
import { Developer } from '../_models/developer';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  constructor(public http:HttpClient) { }
  getCities(){
    return this.http.get("")
  }
  getAllCompanies(){
    return this.http.get("")
  }
  getJobDetails(id:number){
    return this.http.get("");
  }
  applyForJob(applicantId:number, yearsOfExp:number, cv:string, cover_letter:string, starting_date:string){
    return this.http.post("",{})
  }
  getNotificationState(id:number){
    return this.http.get(`http://127.0.0.1:8000/api/profiles/${id}/show/`)
 }
  changeNotificationsState(id:number, state:boolean){
    return this.http.post("", state)
  }
  getProfileDetails(id:number){
    return this.http.get<Developer>(`http://127.0.0.1:8000/api/profiles/${id}/show`)
  }
  getWorkExperience(id:number){
    return this.http.get(`http://127.0.0.1:8000/experience/api/v1/${id}/list`)
  }
  deleteWorkExperience(id:number){
    return this.http.delete("")
  }
  editBasicInfo(id:number, data:{}){
    return this.http.put("", data)
  }
  changePassword(id:number, password:string){
    return this.http.put("", password)
  }
  addWorkExperience(id:number, data:{}){
    return this.http.post("", data)
  }
  editWorkExperience(id:number, data:{}){
    return this.http.put("", data)
  }
  addInterviewQuestions(id:number, data:{}){
    return this.http.post("", data)
  }
  addReview(id:number, data:{}){
    return this.http.post("", data)
  }
  addSalary(id:number,company:string,reviewer:number,salary:number,job_title:string,start_date:string,end_date:string,is_published:boolean){
    return this.http.post("http://127.0.0.1:8000/salary/api/v1/create/", {
      company,
      reviewer ,
      salary,
      job_title,
      start_date,
      end_date ,
      is_published 
    }
    )
  }
  getCompanyOverview(id:number){
    return this.http.get("")
  }
  getCompanyReviews(id:number){
    return this.http.get("")
  }
  getCompanySalaries(id:number){
    return this.http.get("http://127.0.0.1:8000/salary/api/v1/list/")
  }
}
