import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-contacto-content',
  templateUrl: './contacto-content.component.html',
  styleUrls: ['./contacto-content.component.scss']
})
export class ContactoContentComponent implements OnInit{
  constructor(private _contactoService:ContactoService){}
  ngOnInit(): void {
    this.obtenerData()
  }
  obtenerData(){
    this._contactoService.getContacto().subscribe(data=>{
      this.data = data[0];
    },error=>error)
  }
  
  data = {
    direccion: "",
    telefono: "",
    email: ""
  }

}
