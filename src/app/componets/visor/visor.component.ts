import { Component, OnInit } from '@angular/core';
import { VisorService} from '../../services/visor.service';
import * as moment from 'moment';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.css']
})
export class VisorComponent implements OnInit {

  datos: any = [];
  paginaActual:number = 1;

  constructor( private visorService: VisorService) {

    let now = moment(); // add this 2 of 4
    console.log('hello world', now.format()); // add this 3 of 4
    console.log(now.add(7, 'days').format()); // add this 4of 4
   }

  ngOnInit() {
    
    this.iniciar();

   }
   iniciar(){
   this.visorService.getvisor().subscribe(
   res => {
    this.datos = res
    console.log(this.datos);
      },
            
    err => console.error('error visor',err)
  );
 
 
}
 


}
