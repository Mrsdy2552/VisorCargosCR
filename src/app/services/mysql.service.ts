import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seguimiento } from '../models/seguimiento';


@Injectable({
  providedIn: 'root'
})
export class mySql {

  API_URI = 'http://localhost:3007/api/games';

  constructor(private http: HttpClient) { }

 
  saveRegistro(segimieto: Seguimiento) {
    return this.http.post(`${this.API_URI}/carga`, segimieto);
  }

  getComentario(movSumi: string, entraMedi: string){
    return this.http.get(`${this.API_URI}/comentario/${movSumi},${entraMedi}`)
   }



}


