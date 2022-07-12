import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
 
    title = 'companies';
    companies:any = [];
    
    constructor(private http: HttpClient,private route: ActivatedRoute)  {
    
   }
   
   getCompanies(): void {
    const url ='http://127.0.0.1:8000/main/companies/'
      this.http.get(url).subscribe((res)=>{
        this.companies = res
        console.log(this.companies)
      })
    }
  
  
   ngOnInit(){
    this.getCompanies()
    console.log(this.companies)
   }
  }
  