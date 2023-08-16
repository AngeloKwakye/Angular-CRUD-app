import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiurl=  "http://localhost:3000/users";

  constructor(private http: HttpClient) { }



  getuser(username: any){
    return this.http.get(`${this.apiurl}/${username}`);
  }

  getbyid(id: any) {
    return this.http.get(`${this.apiurl}/${id}`);
  }



  isLoggedIn(){
    return sessionStorage.getItem('username')!=null;
  }

  getUserRole(){
    return sessionStorage.getItem('userrole')!=null ? sessionStorage.getItem('userrole')?.toString() : '';
  }
}
