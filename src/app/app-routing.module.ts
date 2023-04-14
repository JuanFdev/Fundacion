import { Component, NgModule } from '@angular/core';// Importa el componente
import { RouterModule, Routes } from '@angular/router';// Importa el componente
import { HeaderComponent } from './header/header.component';// Importa el componente
import { HomeComponent } from './home/home.component';// Importa el componente
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component'; // Importa el componente
import { ValoresComponent } from './valores/valores.component';
import { AdopcionComponent } from './adopcion/adopcion.component';
import { GaleriaComponent } from './galeria/galeria.component'; // Importa el componente Galeria
import { TestimoniosComponent } from './testimonios/testimonios.component'; // Agrega esta línea
import { PadrinosComponent } from './padrinos/padrinos.component'; // Agrega esta línea
import { NoticiasComponent } from './noticias/noticias.component'; // Agrega esta línea
import { EventosComponent } from './eventos/eventos.component'; // Agrega esta línea
import { ContactanosComponent } from './contactanos/contactanos.component'; // Agrega esta línea


const routes: Routes = [
  { path: 'header',
    component:HeaderComponent
  },

  { path: 'home',
    component:HomeComponent
  },

  { path: 'quienes_somos',
    component:QuienesSomosComponent 
  },

  { path: 'valores',
    component:ValoresComponent
  },
  { path: 'adopcion',
    component:AdopcionComponent
  },
  { path: 'galeria',
    component:GaleriaComponent
  },
  { path: 'testimonios',
    component:TestimoniosComponent
  },
  { path: 'padrinos',
    component:PadrinosComponent
  },

  { path: 'noticias',
  component:NoticiasComponent
  },

  { path: 'eventos',
  component:EventosComponent
  },

  { path: 'contactanos',
  component:ContactanosComponent
  },
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }


