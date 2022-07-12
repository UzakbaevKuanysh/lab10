import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-companiesdetail',
  templateUrl: './companiesdetail.component.html',
  styleUrls: ['./companiesdetail.component.css']
})
export class CompaniesdetailComponent implements OnInit {
  title = "companiesdetail"
  vacancies:any = [];
    
    constructor(private http: HttpClient,private route: ActivatedRoute)  {
    
   }
   
   getVacancies(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const url ='http://127.0.0.1:8000/main/companies/' + id.toString()+'/vacancies'
      this.http.get(url).subscribe((res)=>{
        this.vacancies = res
        console.log(this.vacancies)
        
      })
    }
  
  
   ngOnInit(){
    this.getVacancies()
    console.log(this.vacancies)
   }
  }
