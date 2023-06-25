import { Component, OnInit } from '@angular/core';
import { PrincipalService } from './services/principal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Portafolio';
  constructor(private _principalService:PrincipalService ){}
  ngOnInit(): void {
    this.obtenerData();
  }
  obtenerData(){
    this._principalService.getPrincipal().subscribe(data=>{
      this.data=data[0];
    },error=>{
      console.log(error);
    })
    this._principalService.getRedes().subscribe(data=>{
      this.redes=data;
    },error=>{
      console.log(error);
    })
  }
  
  data={
    nombre:"",
    linkCV:"",
    profesion:""
  };
  redes=[{red:"",link:""}]
  proyecto = {
    nombre: "",
    categoria: "",
    cliente: "",
    rol: "",
    fecha:"",
    description: "",
    link:"",
    imagenes: []
  };
  
  procesaPropagar(objProyecto: any) {
    this.proyecto = objProyecto;
  }
}
