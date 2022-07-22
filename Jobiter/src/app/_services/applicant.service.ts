import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  constructor(public http:HttpClient) { }
  getCities(){
    return this.http.get("")
  }
}
