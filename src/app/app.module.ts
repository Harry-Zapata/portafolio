import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ComponetsModule } from './componets/componets.module';
import { CommonModule } from '@angular/common';
import { RecargaDirective } from './directive/recarga.directive';

@NgModule({
  declarations: [AppComponent, RecargaDirective],
  imports: [BrowserModule, AppRoutingModule, SharedModule,ComponetsModule,CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
