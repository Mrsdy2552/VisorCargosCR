import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  constructor() { }
  fingreso: Date;
  
@Input() IdUnico: string;
@Input() Tsegimiento: string;

  ngOnInit() {
    this.fingreso = new Date(Date.now());
    console.log('el ID es:',this.IdUnico,'el segimiento es:',this.Tsegimiento);
    
  }

}
