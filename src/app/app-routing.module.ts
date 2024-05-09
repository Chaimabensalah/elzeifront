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
import { ClientComponent } from './client/client.component';
import { CRAComponent } from './cra/cra.component';
import { MissionComponent } from './mission/mission.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { CralistComponent } from './cralist/cralist.component';
import { ClientdetailsComponent } from './clientdetails/clientdetails.component';
import { DialogAnimationsExampleDialogComponent } from './dialog-animations-example-dialog/dialog-animations-example-dialog.component';


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
  {path:"Client",component:ClientComponent},
  {path:"CRA",component:CRAComponent},
  {path:"Mission",component:MissionComponent},
  {path:"clientlist",component:ClientlistComponent},
  {path:"missionlist",component:MissionlistComponent},
  {path:"cralist",component:CralistComponent},
  {path:"clientdetails/:id",component:ClientdetailsComponent},
  {path:"DialogAnimationsExampleDialog",component:DialogAnimationsExampleDialogComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
