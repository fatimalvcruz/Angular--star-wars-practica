
import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';




@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  peliculas: any;
  //  url:string = 'https://swapi.dev/api/films/';
  error: boolean = false;
  mensaje: string = "Hay un error en la carga";
  carteles: any;
  asyncResult: any;
  cargando: boolean;  
  




 


 
  constructor(private miServicio: DataServiceService) { 

     this.carteles = [
       {picture: 'assets/1.jpg', id: 1},
       {picture: 'assets/2.jpg', id: 2},
       {picture: 'assets/3.jpg', id: 3},
       {picture: 'assets/4.jpg', id: 4},
       {picture: 'assets/5.jpg', id: 5},
       {picture: 'assets/6.jpg', id: 6},
      
     ];
 

  }



  async ngOnInit() {


    this.cargando = true;
    this.asyncResult = await this.miServicio.getPelis().subscribe({
      next:(respuesta: any) => {
        this.peliculas = respuesta.results.filter((film:any) => film.director == "George Lucas");
        this.peliculas.sort(function(a:any ,b:any){
        return a.episode_id - b.episode_id
      });this.cargando = false;
      },
      error:(respuesta: Response) =>{
      this.error = true
      },
      });


      console.log()

 
    } 


    /* 

 async ngOnInit() {

  this.cargando = true;
  this.asyncResult = await this.http.get(this.url).subscribe({
    next:(respuesta: any) => {
      this.peliculas = respuesta.results.filter((film:any) => film.director == "George Lucas");
      this.peliculas.sort(function(a:any ,b:any){
        return a.episode_id - b.episode_id
      });this.cargando = false;
    },
    error:(respuesta: Response) =>{
      this.error = true
    },
  });


  }
  */

 



}
