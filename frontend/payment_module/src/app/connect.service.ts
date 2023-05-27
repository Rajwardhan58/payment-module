import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  setUrl="http://localhost:3000/create-account"
  constructor(private http : HttpClient) { }

  setDataLog(data:any):Observable<any[]>{
    return this.http.post<any>(this.setUrl,data);
  }
}
