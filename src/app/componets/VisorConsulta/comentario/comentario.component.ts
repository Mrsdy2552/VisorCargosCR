import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Seguimiento } from '../../../models/seguimiento';
import { mySql } from '../../../services/mysql.service';
import Swal from 'sweetalert2';
import { VisorConsulta } from '../VisorConsulta.component';


@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
 
  constructor( private registroMsql: mySql,private envio:VisorConsulta) { } 

  fingreso: Date;
  @Input() IdUnico: string;
  @Input() Tsegimiento: string;
  @Input() habilitar: boolean;
  @Input() comentario: string;

  @HostBinding('class') classes = 'row'
  seguimiento: Seguimiento={
    OID: 0,
    Id_Segimiento:'' ,
    nSegimiento:'' ,
    fechaSe: new Date(),
    comentarioSegimiento: ''
  };


  ngOnInit() {
    this.fingreso = new Date(Date.now());
    console.log('el ID es:', this.IdUnico, 'el seguimiento es:', this.Tsegimiento);
    

  }




  saveData(){
    delete this.seguimiento.OID;
    delete this.seguimiento.fechaSe;
    this.seguimiento.Id_Segimiento = this.envio.IdUnico ;
    this.seguimiento.nSegimiento = this.envio.Tsegimiento;


     this.registroMsql.saveRegistro(this.seguimiento)
     .subscribe(
       res=>{
         
         Swal.fire({
          position: 'center',
          type: 'success',
          title: `Seguimiento Guardado`,
          showConfirmButton: true,
                  }) 
                  this.seguimiento = {} as Seguimiento;
                  
                   
       },
       err=> console.log(err)
       
     )
    
  }





}






