import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Child } from '../model/child';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class RegisterformService {
  child: Child=new Child();
    url='/api';
  headers: Headers;
  constructor(private http: HttpClient) { }

  Registration(child){
    return this.http.post<Child>
    (this.url+"/childadd",child);
  }

}
