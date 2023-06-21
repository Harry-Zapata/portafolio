import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumenService {

  constructor(private http:HttpClient) { }
  getResumen():Observable<any>{
    return this.http.get("https://portafolioapi-production-956f.up.railway.app/api/resumens")
  }
  getTecnologias():Observable<any>{
    return this.http.get("https://portafolioapi-production-956f.up.railway.app/api/tecnologias")
  }
  getExperiencias():Observable<any>{
    return this.http.get("https://portafolioapi-production-956f.up.railway.app/api/experiencias")
  }
  getEducacion():Observable<any>{
    return this.http.get("https://portafolioapi-production-956f.up.railway.app/api/educacions")
  }
  getServicios():Observable<any>{
    return this.http.get("https://portafolioapi-production-956f.up.railway.app/api/servicios")
  }
  getTestimonios():Observable<any>{
    return this.http.get("https://portafolioapi-production-956f.up.railway.app/api/testimonios")
  }
  
  
}
