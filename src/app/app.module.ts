import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { FooterComponent } from './footer/footer.component';
import { ValoresComponent } from './valores/valores.component';
import { AdopcionComponent } from './adopcion/adopcion.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { PadrinosComponent } from './padrinos/padrinos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { EventosComponent } from './eventos/eventos.component';
import { ContactanosComponent } from './contactanos/contactanos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    QuienesSomosComponent,
    FooterComponent,
    ValoresComponent,
    AdopcionComponent,
    GaleriaComponent,
    TestimoniosComponent,
    PadrinosComponent,
    NoticiasComponent,
    EventosComponent,
    ContactanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
