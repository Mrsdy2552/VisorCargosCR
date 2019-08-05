import { Component, OnInit } from '@angular/core';

import { VisorService} from '../../services/visor.service';
 
@Component({
  selector: 'VisorConsulta',
  templateUrl: './VisorConsulta.component.html',
  styleUrls:[
    './VisorConsulta.component.css'
  ]
})
export class VisorConsulta implements OnInit {
   
  tdatos: any = [];
  Vdatos: any = [];
  cedula: string;
  paginaActual:number = 1;


  constructor(private tautori: VisorService) { }
 
  ngOnInit() {
    this.autori();
    this.VCargosPendientes();
    }
  autori(){
    this.tautori.getVisorConsulta().subscribe(
      tresul=>{
        this.tdatos = tresul
        console.log(this.tdatos);
      }
    )
          }
          
 VCargosPendientes(){
   this.tautori.getVCargosPendientes().subscribe(
     VCargos => {
       this.Vdatos = VCargos
       console.log(this.Vdatos);
       
     }
   )
 }

  enviar(enviar){
    this.cedula = enviar;
    console.log(enviar);
    // this.tdatos 
    // var cedula = this.tdatos[3]
    // return cedula;
  }
   
 
  }

 


  





