import { Component, OnInit } from '@angular/core';
import { PrincipalService } from './services/principal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Portafolio';
  bgStyle!:any;
  constructor(private _principalService: PrincipalService) { }
  ngOnInit(): void {
    this.obtenerData();
  }
  obtenerData() {
    this._principalService.getPrincipal().subscribe(data => {
      this.data = data[0];
      this.bgStyle = {
        'animation': '40s linear 0s normal none infinite running bgScroll',
        'background': `black url(${data[0].image.secure_url}) scroll center top`,
        'background-repeat': 'no-repeat',
        'background-size': 'cover'
      }
    }, error => {
      console.log(error);
    })
    this._principalService.getRedes().subscribe(data => {
      this.redes = data;
    }, error => {
      console.log(error);
    })
  }
  data = {
    nombre: "",
    linkCV: "",
    profesion: "",
    image: {
      public_id: "",
      secure_url: ""
    }
  };
  redes = [{ red: "", link: "" }]
  proyecto = {
    nombre: "",
    categoria: "",
    cliente: "",
    rol: "",
    fecha: "",
    description: "",
    link: "",
    imagenes: []
  };

  procesaPropagar(objProyecto: any) {
    this.proyecto = objProyecto;
  }
}
