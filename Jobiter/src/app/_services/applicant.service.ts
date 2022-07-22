import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Job } from '../_models/job';

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
}
