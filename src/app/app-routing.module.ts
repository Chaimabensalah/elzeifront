import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavigateComponent } from './navigate/navigate.component';
import { ListComponent } from './list/list.component';
import { SimulateurdetailsComponent } from './simulateurdetails/simulateurdetails.component';
import { SalariesComponent } from './salaries/salaries.component';
import { SearchComponent } from './search/search.component';
import { SalariesdetailsComponent } from './salariesdetails/salariesdetails.component';
import { PdfdetailsComponent } from './pdfdetails/pdfdetails.component';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"navigate",component:NavigateComponent},
  {path:"list",component:ListComponent},
  {path:"Simulateurdetails/:id", component:SimulateurdetailsComponent},
  {path:"salaries",component:SalariesComponent},
  {path:"search",component:SearchComponent},
  {path: "salariesdetails/:id", component: SalariesdetailsComponent},
  {path:"pdfdetails",component:PdfdetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
