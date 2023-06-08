import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto-content',
  templateUrl: './contacto-content.component.html',
  styleUrls: ['./contacto-content.component.scss']
})
export class ContactoContentComponent {
  data = {
    direccion: "Jequetepeque, La Libertad, Peru",
    telefono: "+51 904 961 437",
    email: "harryzapatasoto@gmail.com"
  }

}
