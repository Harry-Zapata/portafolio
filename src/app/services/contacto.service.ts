import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(private http:HttpClient) { }
  getContacto():Observable<any>{
    return this.http.get("https://apiventas-1gby.onrender.com/api/contactos")
  }
}
