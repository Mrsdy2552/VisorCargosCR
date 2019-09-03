import { Component, OnInit } from '@angular/core';
import { VisorService } from '../../services/visor.service';
import { mySql } from '../../services/mysql.service';



@Component({
  selector: 'VisorConsulta',
  templateUrl: './VisorConsulta.component.html',
  styleUrls: [
    './VisorConsulta.component.css'
  ]
})
export class VisorConsulta implements OnInit {

  tdatos: any = [];
  Vdatos: any = [];
  IdUnico: string;
  Tsegimiento: string;

  paginaActual: number = 1;
  id: string;
  MOVULNUMUY: string;
  edad: number;
  habilitar: boolean;
  comentario: string; //comentario guardado






  constructor(private tautori: VisorService, private registroMsql: mySql) { }

  ngOnInit() {
    this.autori();
    // this.date();

  }
  autori() {
    this.tautori.getVisorConsulta().subscribe(
      tresul => {
        this.tdatos = tresul


      }
    )
  }

  VCargosPendientes(id: string, MOVULNUMUY: string, REFFOR: string, REFDOR: string, REFLOR: string) {
    // ,,,REFDOR:string,
    console.log("entro visor pendientes", id);

    this.tautori.getVCargosPendientes(id, MOVULNUMUY, REFFOR, REFDOR, REFLOR).subscribe(
      // ,MOVULNUMUY,REFDOR,REFFOR,REFLOR
      VCargos => {
        this.Vdatos = VCargos
        console.log(this.Vdatos);

      }
    )
  }

  // date(){
  //  this.edad =  this.tdatos.rows[6];
  //  console.log('esta es la edad: ',this.edad);

  // 

  enviar(enviar1, enviar2) {
    this.IdUnico = enviar1;
    this.Tsegimiento = enviar2;

     


    this.registroMsql.getComentario(enviar1, enviar2).subscribe(
      res => {
       
        if (res[0] == null) {
         this.habilitar = true;
        console.log('habilitado', this.habilitar);
        
          return this.habilitar;
          
          
        } else {
          this.comentario = res[0].comentarioSegimiento;
          this.habilitar = false;
          console.log('comentario: ', this.comentario);
          
          //return  this.comentario,this.habilitar; 

          
          
          
        }
      }
    );
    }
  } 
