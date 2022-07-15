import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from './authorized.guard';
import { LoginComponent } from './components/features/login/login.component';
import { SignUpComponent } from './components/features/sign-up/sign-up.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'company-sign-up',component:SignUpComponent},
  {
    path:'company',
    loadChildren: ()=>import('./components/features/company/company.module').then(m=>m.CompanyModule),
    canActivate:[AuthorizedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
