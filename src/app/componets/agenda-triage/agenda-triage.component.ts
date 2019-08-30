import { Component, OnInit, Output } from '@angular/core';
import { VisorService } from 'src/app/services/visor.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-agenda-triage',
  templateUrl: './agenda-triage.component.html',
  styles: []
})
export class AgendaTriageComponent implements OnInit {

    agendas: any = [];
    paginaActual:number = 1;
    selectsamu: string = '01001';
    // @Output () envio = new EventEmitter;

  constructor(private vagenda: VisorService) { }

  ngOnInit() {
   
    
  }
  triage(selectsamu: string){
    this.vagenda.getAgenTriage(selectsamu).subscribe(
      res => {
        this.agendas = res
        console.log(this.agendas);
        
      }

    )
  }

  enviar(enviar){
    this.selectsamu = enviar;
    console.log("Variable Enviada:",enviar);
      }
             

}
