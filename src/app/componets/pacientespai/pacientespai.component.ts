import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { VisorService} from '../../services/visor.service';


@Component({
  selector: 'app-pacientespai',
  templateUrl: './pacientespai.component.html',
  styleUrls: ['./pacientespai.component.css']
})

export class PacientespaiComponent implements OnInit {

  paginaActual: number = 1;
  pacient: any  = [];
  cedula: string;

  constructor(private pacientpai:VisorService) { }

  ngOnInit() {
    this.pacientpai.getpacientpai().subscribe(
      pacien=>{
        this.pacient = pacien
        console.log(this.pacient);
        

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

