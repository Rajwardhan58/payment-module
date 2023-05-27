import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  setUrl="http://localhost:3000/create-account"

  setUrlPayment="http://localhost:3000/make-payment"
  constructor(private http : HttpClient) { }

  setDataLog(data:any):Observable<any[]>{
    console.warn(data)
    return this.http.post<any>(this.setUrl,data);
  }
  setPayment(data:any):Observable<any>{
    return this.http.post<any>(this.setUrlPayment,data)
  }
}
