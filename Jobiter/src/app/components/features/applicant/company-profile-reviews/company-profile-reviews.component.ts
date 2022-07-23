import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

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
  constructor() { }

  ngOnInit(): void {
    this.data = {
      labels: ['Positive','Negative'],
      datasets: [
          {
              data: [300, 50],
              backgroundColor: [
                  "#28A745",
                  "#FF0000",
              ],
              hoverBackgroundColor: [
                "#28A745",
                "#FF0000",
              ]
          }
      ]
  };

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
