import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumenComponent } from './resumen/resumen.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    ResumenComponent,
    PortafolioComponent,
    BlogComponent,
    ContactoComponent,
  ],
  imports: [CommonModule],
  exports: [
    ResumenComponent,
    PortafolioComponent,
    BlogComponent,
    ContactoComponent,
  ],
})
export class SharedModule {}
