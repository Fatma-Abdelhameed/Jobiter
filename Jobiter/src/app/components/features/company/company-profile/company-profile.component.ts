import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  allowNotifications:boolean = true
  constructor() { }
  allowNotification(checked:boolean){
    console.log(checked)
  }
  ngOnInit(): void {
  }

}
