import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {

  constructor(private http:HttpClient) {}
  getProyectos():Observable<any>{
    return this.http.get("https://portafolioapi-production-7707.up.railway.app//api/portafolios")
  }
}
