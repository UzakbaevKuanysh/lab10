import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies.companent';


import { CompaniesdetailComponent } from './companiesdetail/companiesdetail.component';
import { AuthGuard } from './helpers';
import { LoginComponent } from './login';

const routes: Routes = [
  { path: 'main/companies', component: CompaniesComponent },
  { path: 'main/companies/:id/vacancies', component: CompaniesdetailComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
