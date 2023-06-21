import { Component, OnInit } from '@angular/core';
import { ResumenService } from 'src/app/services/resumen.service';

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
  resumen={nombre:"",direccion:"",telefono:"",nacimiento:"",email:"",interes:"",profesion:"",resumen:""}
  tecnologia=[{nombre:"",progreso:0}]
  experiencia=[{puesto:"",empresa:"",inicio:"",fin:"",resumen:""}]
  educacion=[{grado:"",escuela:"",inicio:"",fin:"",certificado:"",resumen:""}]
  testimonio=[{img:"",testimonio:"",nombre:"",puesto:""}]
  servicios=[{icon:"",service:"",resumen:""}]
  data=[this.tecnologia,this.experiencia,this.educacion,this.testimonio,this.servicios]

}
