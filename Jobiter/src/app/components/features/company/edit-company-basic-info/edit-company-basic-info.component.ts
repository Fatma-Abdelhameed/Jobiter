import { Component, OnInit } from '@angular/core';

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
    websiteLink:''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
