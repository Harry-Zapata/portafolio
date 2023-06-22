import { Component, OnInit } from '@angular/core';
import { ResumenService } from 'src/app/services/resumen.service';
import { resumen } from '../models/resumen';
import { tecnologia } from '../models/tecnoligia';
import { servicios } from '../models/servicios';
import { testimonio } from '../models/testimonio';
import { experiencia } from '../models/experiencia';
import { educacion } from '../models/educacion';

@Component({
  selector: 'app-resumen-content',
  templateUrl: './resumen-content.component.html',
  styleUrls: ['./resumen-content.component.scss']
})
export class ResumenContentComponent implements OnInit{
  constructor(private _resumenServices:ResumenService){}
  ngOnInit(): void {
    this.obtenerData()
  }
  obtenerData(){
    this._resumenServices.getResumen().subscribe(data=>{
      this.resumen=data[0]; 
    },error=>{
      console.log(error);
    })
    this._resumenServices.getTecnologias().subscribe(data=>{
      this.tecnologia=data; 
    },error=>{
      console.log(error);
    })
    this._resumenServices.getExperiencias().subscribe(data=>{
      this.experiencia=data; 
    },error=>{
      console.log(error);
    })
    this._resumenServices.getEducacion().subscribe(data=>{
      this.educacion=data; 
    },error=>{
      console.log(error);
    })
    this._resumenServices.getServicios().subscribe(data=>{
      this.servicios=data; 
    },error=>{
      console.log(error);
    })
    this._resumenServices.getTestimonios().subscribe(data=>{
      this.testimonio=data; 
    },error=>{
      console.log(error);
    })
  }
  resumen: resumen={
    nombre: '',
    direccion: '',
    telefono: '',
    nacimiento: '',
    email: '',
    interes: '',
    profesion: '',
    resumen: ''
  };
  tecnologia:tecnologia[]=[]
  experiencia:experiencia[]=[]
  educacion:educacion[]=[]
  testimonio:testimonio[]=[]
  servicios:servicios[]=[]
  data=[this.tecnologia,this.experiencia,this.educacion,this.testimonio,this.servicios]

}
