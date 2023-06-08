import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumenContentComponent } from './resumen-content/resumen-content.component';
import { BlogContentComponent } from './blog-content/blog-content.component';
import { ContactoContentComponent } from './contacto-content/contacto-content.component';
import { PortafolioContentComponent } from './portafolio-content/portafolio-content.component';

@NgModule({
  declarations: [
    ResumenContentComponent,
    BlogContentComponent,
    ContactoContentComponent,
    PortafolioContentComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    ResumenContentComponent,
    BlogContentComponent,
    ContactoContentComponent,
    PortafolioContentComponent
  ]
})
export class ComponetsModule { }
