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
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';
import { FacebookLoginProvider, SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { CrearCoachComponent } from './crear-coach/crear-coach.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes= [
  {path: 'formulario', component: FormularioComponent  },
  {path: 'juegos', component: JuegosComponent  },
  {path: 'inicio', component:  CoachComponent },
  {path: 'vivo', component: VivoComponent},
  {path: 'contratar', component:  UsuarioComponent },
  {path: 'crear', component: CrearCoachComponent}
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
    CrearCoachComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    GooglePayButtonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())

  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(
              '1036510950520742'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
