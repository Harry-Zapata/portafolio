import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }
  getContacto():Observable<any>{
    return this.http.get("https://portafolioapi-production-7707.up.railway.app/api/blogs")
  }
}
