import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employee } from '../Model/employeemodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  apiurl= 'http://localhost:3000/employee'
  constructor(private http: HttpClient) { }



  getallEmplyees(): Observable<employee[]>{
   return this.http.get<employee[]>(this.apiurl) 
  }

  createNew(data: any){
    return this.http.post(this.apiurl,data)
  }
}
