import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { JuegosComponent } from './juegos/juegos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  RouterModule, Routes } from '@angular/router';
import { CoachComponent } from './coach/coach.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { VivoComponent } from './vivo/vivo.component';
import { YoutubePipe } from './pipe/youtube.pipe';
import { HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';

const routes: Routes= [
  {path: 'formulario', component: FormularioComponent  },
  {path: 'juegos', component: JuegosComponent  },
  {path: 'inicio', component:  CoachComponent },
  {path: 'vivo', component: VivoComponent},
  {path: 'contratar', component:  UsuarioComponent }



]



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    JuegosComponent,
    FormularioComponent,
    CoachComponent,
    UsuarioComponent,
    VivoComponent,
    YoutubePipe,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
