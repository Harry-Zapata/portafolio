import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portafolio';

  proyecto = {
    nombre: "",
    categoria: "",
    cliente: "",
    rol: "",
    fecha:"",
    description: "",
    link:"",
    imagenes: [

    ]
  };
  data = {
    nombre: "Harry zapata",
    profesion: "Desarrollador Web FrontEnd",
    linkCV: "https://drive.google.com/file/d/135S79bccxYnnihhYYx1vpVAwj2Yt0sgg/view?usp=share_link",
    redes: [
      {
        nombre: "linkedin",
        link: "https://www.linkedin.com/in/harryzapata21/"
      },
      {
        nombre: "github",
        link: "https://github.com/Harry-2112"
      },
      {
        nombre: "whatsapp",
        link: "https://wa.me/51904961437"
      },
    ]
  }
  idmenu!: string;
  actualizar(id:string){
    console.log("ejecutando la funcion actualizar principal");
    console.log(id);
    this.idmenu=id;
  }
  procesaPropagar(mensaje: any) {
    console.log("ejecutando la funcion propagar principal");
    this.proyecto = mensaje;
  }
}
