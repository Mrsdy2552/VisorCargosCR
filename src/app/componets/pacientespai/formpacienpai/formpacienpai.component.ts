import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-formpacienpai',
  templateUrl: './formpacienpai.component.html',
  styleUrls: ['./formpacienpai.component.css']
})
export class FormpacienpaiComponent implements OnInit {

@Input() VISOR: string;
paginaActual:number = 1;
ingreso : Date ;
secuencia: number;



  constructor() {
    
   }


  ngOnInit() {
    this.ingreso = new Date(Date.now());
    this.secuencia= 10;

  }


}
