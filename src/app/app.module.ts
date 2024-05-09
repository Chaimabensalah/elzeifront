import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavigateComponent } from './navigate/navigate.component';
import { RestapiService } from './restapi.service';
import { ListComponent } from './list/list.component';
import { SimulateurdetailsComponent } from './simulateurdetails/simulateurdetails.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatMenuModule } from '@angular/material/menu';
import { DatePipe } from '@angular/common';
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
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { ClientdetailsComponent } from './clientdetails/clientdetails.component';
import { MatIconModule } from '@angular/material/icon';
import { DialogAnimationsExampleDialogComponent } from './dialog-animations-example-dialog/dialog-animations-example-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigateComponent,
    ListComponent,
    SimulateurdetailsComponent,
    SalariesComponent,
    SearchComponent,
    SalariesdetailsComponent,
    PdfdetailsComponent,
    ClientComponent,
    CRAComponent,
    MissionComponent,
    ClientlistComponent,
    MissionlistComponent,
    CralistComponent,
    ClientdetailsComponent,
    DialogAnimationsExampleDialogComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatMenuModule,
    HttpClientJsonpModule,  
    MatSelectCountryModule.forRoot('fr'), // you can use 'br' | 'de' | 'en' | 'es' | 'fr' | 'hr' | 'hu' | 'it' | 'nl' | 'pt' --> MatSelectCountrySupportedLanguages
    MatIconModule,
    MatDialogModule

  ],
  providers: [
    RestapiService,
    provideAnimationsAsync(),
    DatePipe
    ],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
