import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  setUrl=""
  constructor(private http : HttpClient) { }

  setDataLog(data:any):Observable<any[]>{
    console.warn(data)
    return this.http.post<any>(this.setUrl,data);
  }
}
