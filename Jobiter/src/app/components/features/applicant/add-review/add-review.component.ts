import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  formData = {
    title:'',
    position:'',
    pros:'',
    cons:'',
    state:'',
    rating:0
  }
  constructor() { }
  add(){
    
  }
  ngOnInit(): void {
  }

}
