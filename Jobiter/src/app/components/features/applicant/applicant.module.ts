import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCompaniesComponent } from './all-companies/all-companies.component';
import { FormsModule } from '@angular/forms';
import {RatingModule} from 'primeng/rating';



@NgModule({
  declarations: [
    AllCompaniesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RatingModule
  ],
  exports:[AllCompaniesComponent]
})
export class ApplicantModule { }
