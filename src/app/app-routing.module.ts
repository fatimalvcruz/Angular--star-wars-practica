import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ActoresComponent } from './actores/actores.component';

const rutas: Routes = [
  
 
  {path: '', component: CardComponent},
  {path: 'actores/:id', component: ActoresComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
