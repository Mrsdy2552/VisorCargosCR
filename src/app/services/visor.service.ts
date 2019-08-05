import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class VisorService {

  API_URI = 'http://localhost:3001';
  constructor( private http: HttpClient) { }
  
L
  getvisor () {
  console.log('funciona');
   return this.http.get(`${this.API_URI}/posts`);
  }
getVisorConsulta(){
  console.log('Funciona Tablero');
  return this.http.get(`${this.API_URI}/Vconsult`);
}
getVCargosPendientes(){
  console.log('funciona Visor cargos Pendientes ');
  return this.http.get(`${this.API_URI}/cargospendientes`);

}
getpacientpai(){
  console.log('pacientes pai funciona');
  return this.http.get(`${this.API_URI}/pacientespai`);

}
getAgenTriage(){
  console.log('TRIAGE FUNCIONA');
  return this.http.get(`${this.API_URI}/agentriage`);
}

}

