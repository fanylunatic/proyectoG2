import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCoachComponent } from './crear-coach/crear-coach.component';
import { JuegosComponent } from './juegos/juegos.component';

const routes: Routes = [
  { path: 'listaCoachs', component: JuegosComponent},
  { path: 'editarCoach/:id', component: CrearCoachComponent},
  { path: 'agregarCoach/', component: CrearCoachComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
