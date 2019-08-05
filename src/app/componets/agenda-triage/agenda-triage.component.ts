import { Component, OnInit } from '@angular/core';
import { VisorService } from 'src/app/services/visor.service';

@Component({
  selector: 'app-agenda-triage',
  templateUrl: './agenda-triage.component.html',
  styles: []
})
export class AgendaTriageComponent implements OnInit {

    agendas: any [];
    paginaActual:number = 1;

  constructor(private vagenda: VisorService) { }

  ngOnInit() {
  }
  
             

}
