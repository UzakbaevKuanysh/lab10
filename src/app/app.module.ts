import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CompaniesdetailComponent } from './companiesdetail/companiesdetail.component';

import { BasicAuthInterceptor, ErrorInterceptor, fakeBackendProvider } from './helpers';
import { ReactiveFormsModule } from '@angular/forms';
import { CompaniesComponent } from './companies/companies.companent';
import { LoginComponent } from './login';
@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    CompaniesdetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
