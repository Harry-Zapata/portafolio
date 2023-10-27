import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor(private http:HttpClient) { }
  getPrincipal():Observable<any>{
    return this.http.get("https://portafolioapi.onrender.com/api/principals")
  }
  getRedes():Observable<any>{
    return this.http.get("https://portafolioapi.onrender.com/api/redes")
  }
}
