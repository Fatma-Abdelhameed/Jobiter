import { Component, OnInit } from '@angular/core';
import {ConfirmationService} from "primeng/api";

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
  providers: [ConfirmationService]
})
export class JobDetailsComponent implements OnInit {

  constructor(public confirmationService: ConfirmationService) { }

  ngOnInit(): void {
  }
  confirm(event: any) {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Are you sure that you want to delete this job?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {},
      reject: () => {}
    });
  }
}
