import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ActoresComponent } from './actores/actores.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { RouterModule, Routes } from '@angular/router';
import { DataServiceService } from './data-service.service';
import { DetailsComponent } from './details/details.component';

const rutas:Routes = [
  {path: '', component: CardComponent},
  {path: 'actores/:id', component: ActoresComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ActoresComponent,
    CabeceraComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, RouterModule.forRoot(rutas)
   
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
