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
  constructor() { }

  ngOnInit(): void {
    this.data = {
      labels: ['A','B','C'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
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
