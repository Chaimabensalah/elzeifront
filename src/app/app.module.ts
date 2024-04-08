import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
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
    PdfdetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatMenuModule
   

  ],
  providers: [RestapiService,
    provideAnimationsAsync(),
    DatePipe
    ],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
