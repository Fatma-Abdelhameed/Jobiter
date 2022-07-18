import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-company-about',
  templateUrl: './edit-company-about.component.html',
  styleUrls: ['./edit-company-about.component.css']
})
export class EditCompanyAboutComponent implements OnInit {
  formData = {
    about:''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
