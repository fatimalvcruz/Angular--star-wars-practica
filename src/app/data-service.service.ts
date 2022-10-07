import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataServiceService {



  url:string = 'https://swapi.dev/api';
  filmEndpoint:string = '/films/';



  constructor(private http: HttpClient) { 

  }






    getPelis():any{
      return this.http.get(`${this.url}${this.filmEndpoint}`);

    }

    getActors(charactersEndpoint:string):any{
      return this.http.get(charactersEndpoint);
    }


 
 





}
