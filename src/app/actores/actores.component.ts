
import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html',
  styleUrls: ['./actores.component.scss']
})
export class ActoresComponent implements OnInit {

  @Input() peliculasActores: any;


  peliculas: any;
  error: boolean = false;
  mensaje: string = "Hay un error en la carga";
  asyncResult: any;
  cargando: boolean;

  constructor(private miServicio: DataServiceService) { 

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

 
    }
   
  }


