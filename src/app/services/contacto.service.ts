import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(private http:HttpClient) { }
  getContacto():Observable<any>{
    return this.http.get("https://portafolioapi-production-956f.up.railway.app/api/contactos")
  }
}