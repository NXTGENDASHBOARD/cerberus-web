import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { NgxGaugeModule } from 'ngx-gauge';
import { HttpClientModule } from "@angular/common/http";
import { NgApexchartsModule } from "ng-apexcharts";


export const APP_MODULES = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    NgxGaugeModule,
    HttpClientModule,
    NgApexchartsModule
]



import { AppComponent } from './app.component';

export const APP_COMPONENTS = AppComponent;
