import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PortafolioService } from 'src/app/services/portafolio.service';

@Component({
  selector: 'app-portafolio-content',
  templateUrl: './portafolio-content.component.html',
  styleUrls: ['./portafolio-content.component.scss']
})
export class PortafolioContentComponent implements OnInit {
  constructor(private _portafolioService:PortafolioService){}
 ngOnInit(): void {
    this.obtenerProyectos();
  }

  @Output()
  propagar = new EventEmitter<any>();
  emit(data: any) {
    this.propagar.emit(data);
  }
  obtenerProyectos(){
    this._portafolioService.getProyectos().subscribe(data=>{
      this.proyecto=data;
      this.menuFiltro();
    },error=>{error})
  }
  proyecto=[{filtro:"",href:"",alt:"",data:{nombre:"",link:"",categoria:"",cliente:"",rol:"",fecha:"",description:"",imagenes:[]}}]

  menu: Array<string> = []
  menuFiltro() {
    this.proyecto.forEach(element => {
      this.menu.push(element.filtro)
    });
    let uniqueValues = [...new Set(this.menu)];
    this.menu = uniqueValues;
  }

  
}
