import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumenService {

  constructor(private http:HttpClient) { }
  getResumen():Observable<any>{
    return this.http.get("https://portafolioapi.onrender.com/api/resumens")
  }
  getTecnologias():Observable<any>{
    return this.http.get("https://portafolioapi.onrender.com/api/tecnologias")
  }
  getExperiencias():Observable<any>{
    return this.http.get("https://portafolioapi.onrender.com/api/experiencias")
  }
  getEducacion():Observable<any>{
    return this.http.get("https://portafolioapi.onrender.com/api/educacions")
  }
  getServicios():Observable<any>{
    return this.http.get("https://portafolioapi.onrender.com/api/servicios")
  }
  getTestimonios():Observable<any>{
    return this.http.get("https://portafolioapi.onrender.com/api/testimonios")
  }


}
