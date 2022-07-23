import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApplicantService } from 'src/app/_services/applicant.service';

@Component({
  selector: 'app-company-profile-reviews',
  templateUrl: './company-profile-reviews.component.html',
  styleUrls: ['./company-profile-reviews.component.css']
})
export class CompanyProfileReviewsComponent implements OnInit {
    data: any;
    chartOptions: any;
    subscription: Subscription | undefined;
    rating = 4
    resData:any
  constructor(public applicantSer:ApplicantService, public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.data = {
      labels: ['Positive','Negative'],
      datasets: [
          {
              data: [300, 50],
              backgroundColor: [
                  "#27B4FB",
                  "#FF0000",
              ],
              hoverBackgroundColor: [
                "#27B4FB",
                "#FF0000",
              ]
          }
        ]
      };
      this.applicantSer.getCompanyReviews(this.route.snapshot.params['id']).subscribe({
        next:(res)=>{
          this.resData = res
        }
      })
  }


    getLightTheme() {
      return {
          plugins: {
              legend: {
                  labels: {
                      color: '#495057'
                  }
              }
          }
      }
    }

    getDarkTheme() {
      return {
          plugins: {
              legend: {
                  labels: {
                      color: '#ebedef'
                  }
              }
          }
      }
    }
  }

