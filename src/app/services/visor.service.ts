import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpParams, HttpHandler} from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class VisorService {

  @Input () envio: string;
  API_URI = 'http://localhost:3001';
  constructor( private http: HttpClient) { }

  getvisor () {
  console.log('funciona');
   return this.http.get(`${this.API_URI}/posts`);
  }
getVisorConsulta(){
  console.log('Funciona Tablero');
  return this.http.get(`${this.API_URI}/Vconsult`);
}
getVCargosPendientes(id: string,MOVULNUMUY: string,REFFOR: string, REFDOR: string,REFLOR: string){
  // , ,,,
  console.log('funciona Visor cargos Pendientes ');
  return this.http.get(`${this.API_URI}/cargospendientes/${id},${MOVULNUMUY},${REFFOR},${REFDOR},${REFLOR}`);
  // ,,,${REFDOR},${REFLOR}
}
getpacientpai(){
  console.log('pacientes pai funciona');
  return this.http.get(`${this.API_URI}/pacientespai`);
}
getAgenTriage(enviar: string){
  return this.http.get(`${this.API_URI}/agentriage/${enviar}`)
 }
 getRecepFarma(movSumi: string, entraMedi: string){
  return this.http.get(`${this.API_URI}/recepciontecn/${movSumi},${entraMedi}`)
 }


 gettabHospiDomiciliaria(){
  console.log('H Domiciliaria Funciona');
  return this.http.get(`${this.API_URI}/tHdomiciliaria`);
}


}

