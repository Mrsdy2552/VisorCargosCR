import { Component, OnInit } from '@angular/core';
import { VisorService} from '../../../services/visor.service';

@Component({
  selector: 'app-pacientes-hosp-domi',
  templateUrl: './pacientes-hosp-domi.component.html',
  styleUrls: ['./pacientes-hosp-domi.component.css']
})
export class PacientesHospDomiComponent implements OnInit {
  datos: any = [];
  constructor(private visorService: VisorService) { }

  ngOnInit() {
    this.iniciar();
  }
  iniciar(){
    this.visorService.gettabHospiDomiciliaria().subscribe(
    res => {
     this.datos = res
     console.log(this.datos);
       },
             
     err => console.error('error visor',err)
   );
  
      }
}
