import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-company-name-image',
  templateUrl: './edit-company-name-image.component.html',
  styleUrls: ['./edit-company-name-image.component.css']
})
export class EditCompanyNameImageComponent implements OnInit {

  constructor() { }
  formData = {
    name:'',
    imageUrl:''
  }
  ngOnInit(): void {
  }

}
